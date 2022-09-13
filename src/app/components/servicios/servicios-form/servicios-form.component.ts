import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from 'app/models/servicio';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-servicios-form',
  templateUrl: './servicios-form.component.html',
  styleUrls: ['./servicios-form.component.scss']
})
export class ServiciosFormComponent implements OnInit {
  
  constructor( private api: ApiService,private router: Router,
    private aRouter: ActivatedRoute) {
    this.id = this.aRouter.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
    if(this.id != null){
      this.data();
    }
  }
  //variables
  file: File = null;
  title: string = "";
  id:string;
  servicio:Servicio = {image:'',name:''};
  collection= "servicios";
  //handle of register o update
  async handle() {
    if (this.id != null) {
      if(this.file != null){
        this.api.deleteFile(this.servicio.image);
        await this.uploadFile();
      }
      this.update();
    } else {
      await this.uploadFile();
      this.create();
    }
  }

  //change file photo
  async changeFile(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  //upload photo file
  async uploadFile() {
    const filename = new Date().toISOString();
    var nameFile = filename;
    let ref = this.api.fileRef(filename);
    let task = await this.api.uploadFile(filename, this.file);
    this.servicio.image = await ref.getDownloadURL().toPromise();
  }
  
  async create(){
    const resp = await this.api.create(this.collection,this.servicio);
    if(resp){
      this.router.navigate(['servicios']);
    }
  }
  async data(){
    const resp = await this.api.getOne(this.collection,this.id);
    console.log(resp.data()['name']);
    if(resp){
      this.servicio = {
        name: resp.data()['name'],
        image:resp.data()['image']
        
      };
    }
    
  }
  async update(){
    try{
      const resp = await this.api.update(this.collection,this.id,this.servicio);
      this.router.navigate(['/Servicios']);
    }catch(e){
      console.log(e)
    }
    
    
  }
}
