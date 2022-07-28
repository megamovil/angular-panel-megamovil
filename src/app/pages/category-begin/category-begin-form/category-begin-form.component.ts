import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryBegin } from 'app/models/category-begin';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-category-begin-form',
  templateUrl: './category-begin-form.component.html',
  styleUrls: ['./category-begin-form.component.scss']
})
export class CategoryBeginFormComponent implements OnInit {
  categoryBegin: CategoryBegin = {};
  titulo = "Agregar categoría";
  buttonText = "Crear";
  collection = "categoryBegin";
  loading  = false;
  id:string;
  constructor(private api : ApiService,private aRouter:ActivatedRoute ,private router: Router) { 
    this.id = this.aRouter.snapshot.paramMap.get('id');
    
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getData();
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
    console.log(this.categoryBegin);
    this.categoryBegin = {
      name: resp.data()['name'],
      
    }
    }
    
  }
  async create(){
    this.loading = false;
    const resp = await this.api.create(this.collection,this.categoryBegin);
    if(resp){
      this.router.navigate(['/categoriaInicio']);
    }else{
      console.log("error naco ");
    }
    this.loading = true;
  }

  async update(){
    this.loading = false;
    try{
      console.log(this.categoryBegin)
       this.api.update(this.collection,this.id,this.categoryBegin);
      this.router.navigate(['/categoriaInicio']);
    }catch{e=>{
      console.log(e);
    }}
    
    
    this.loading = true;
  }
}
