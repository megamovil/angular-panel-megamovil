import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Distribuidor } from 'app/models/distribuidor';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-distribuidores-form',
  templateUrl: './distribuidores-form.component.html',
  styleUrls: ['./distribuidores-form.component.scss']
})
export class DistribuidoresFormComponent implements OnInit {

  constructor(private api: ApiService,private router: Router,
    private aRouter: ActivatedRoute) { 
      this.id = this.aRouter.snapshot.paramMap.get("id");
    }

  ngOnInit(): void {
    if(this.id != null){
      this.data();
    }
  }
  file: File = null;
  title: string = "";
  id:string;
  distribuidor:Distribuidor = {};
  collection= "distribuidores";
  //handle of register o update
  async handle() {
    if (this.id != null) {
      if(this.file != null){
        this.api.deleteFile(this.distribuidor.photo);
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
    this.distribuidor.photo = await ref.getDownloadURL().toPromise();
  }
  
  async create(){
    const resp = await this.api.create(this.collection,this.distribuidor);
    if(resp){
      this.router.navigate(['Distribuidores']);
    }
  }
  async data(){
    const resp = await this.api.getOne(this.collection,this.id);
    console.log(resp.data()['name']);
    if(resp){
      this.distribuidor = {
        id: resp.id,
        name: resp.data()['name'],
        email: resp.data()['email'],
        password: resp.data()['password'],
        phone: resp.data()['phone'],
        photo: resp.data()['photo'],
        tituloCargo: resp.data()['tituloCargo'],
        user: resp.data()['user'],
        
      };
    }
console.log(this.distribuidor.user)
  }
  async update(){
    try{
      const resp = await this.api.update(this.collection,this.id,this.distribuidor);
      this.router.navigate(['/Distribuidores']);
    }catch(e){
      console.log(e)
    }
    
    
  }
}
