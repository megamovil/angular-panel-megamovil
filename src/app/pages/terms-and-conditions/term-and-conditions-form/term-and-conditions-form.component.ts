import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TermsConditions } from 'app/models/terms-conditions';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-term-and-conditions-form',
  templateUrl: './term-and-conditions-form.component.html',
  styleUrls: ['./term-and-conditions-form.component.scss']
})
export class TermAndConditionsFormComponent implements OnInit {
  termsConditions: TermsConditions = {};
  titulo = "Agregar terminos y condiciones";
  buttonText = "Crear";
  collection = "termsConditions";
  file:File = null;
  id:string;
  constructor(
    private api: ApiService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  async handle() {
    if(this.id != null){
      this.update();
    }else{
      await this.uploadFile();
      this.create();

    }
  }
  async create() {
   
    const resp = await this.api.create(this.collection, this.termsConditions);
    if (resp) {
      this.router.navigate(["terminosycondiciones"]);
    }else{
      console.log("erro naco")
    }
  }
  async update() {
    try{
      const resp = await this.api.update(this.collection,this.id,this.termsConditions);
      this.router.navigate(["terminosycondiciones"]);
    }catch{e=>{
      console.log(e);
    }}
    
  }
  async changeFile(event) {
    if(event.target.files.length > 0){
      this.file = event.target.files[0];
    }
  }


  async uploadFile() {
    const filename = new Date().toISOString();
    this.termsConditions.file = filename;
    let ref = this.api.fileRef(filename);
    let task = await this.api.uploadFile(filename,this.file);
    this.termsConditions.link = await ref.getDownloadURL().toPromise();
  }
  async updateFile() {
    const name = this.termsConditions.file;
    console.log(name);
    await this.api.updateFile(name, this.file, this.id, this.collection);
  }
  
  
  async getData() {
    if (this.id != null) {
      this.titulo = "Editar terminos y condiciones";
      this.buttonText = "Editar";
      const resp = await this.api.getOne(this.collection, this.id);
      console.log(this.termsConditions);
      this.termsConditions = {
        file: resp.data()["file"],
        link: resp.data()["link"],
      };
    }
  }

}
