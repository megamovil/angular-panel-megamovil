import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryEvent } from 'app/models/category-event';
import { ApiService } from 'app/services/api.service';


@Component({
  selector: 'app-category-events-form',
  templateUrl: './category-events-form.component.html',
  styleUrls: ['./category-events-form.component.scss']
})
export class CategoryEventsFormComponent implements OnInit {
  categoryEvent: CategoryEvent = {};
  titulo = "Agregar categoría";
  buttonText = "Crear";
  collection = "categoryEvent";
  
  loading  = false;
  id:string;
  constructor(private api : ApiService,private aRouter:ActivatedRoute ,private router: Router) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
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
    console.log(this.categoryEvent);
    this.categoryEvent = {
      name: resp.data()['name'],
      
    }
    }
    
  }
  async create(){
    this.loading = false;
    const resp = await this.api.create(this.collection,this.categoryEvent);
    if(resp){
      this.router.navigate(['/categoriaEventos']);
    }else{
      console.log("error naco ");
    }
    this.loading = true;
  }

  async update(){
    this.loading = false;
    try{
      console.log(this.categoryEvent)
      await  this.api.update(this.collection,this.id,this.categoryEvent);
      this.router.navigate(['/categoriaEventos']);
    }catch{e=>{
      console.log(e);
    }}
    
    
    this.loading = true;
  }
}
