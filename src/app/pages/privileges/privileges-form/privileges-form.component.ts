import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/models/user';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-privileges-form',
  templateUrl: './privileges-form.component.html',
  styleUrls: ['./privileges-form.component.scss']
})
export class PrivilegesFormComponent implements OnInit {
  user: User = {};
  collection = "users"
  
  titulo = "Crear usuario";
  buttonText= "Crear";
  loading = false;
  id:string;
  constructor(private api : ApiService,private aRouter:ActivatedRoute ,private router: Router) { 
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getData()
  }
  
  async handle(){
    if(this.id == null){
      this.create();
    }else{
      this.update();
    }
  }
  async getData(){
    if(this.id != null){
      const resp = await this.api.getOne(this.collection,this.id);
    console.log(this.user);
    this.user = {
      username: resp.data()['username'],
      password: resp.data()['password'],
      rol: resp.data()['rol']
      
    }
    }
    console.log(this.user.username)
  }
  async create(){
    this.loading = false;
    const resp = await this.api.create(this.collection,this.user);
    if(resp){
      this.router.navigate(['/privilegios']);
    }else{
      console.log("error naco ");
    }
    this.loading = true;
  }

  async update(){
    this.loading = false;
    try{
      console.log(this.user)
      await  this.api.update(this.collection,this.id,this.user);
      this.router.navigate(['/privilegios']);
    }catch{e=>{
      console.log(e);
    }}
    
    
    this.loading = true;
  }
}
