import { Component, OnInit } from '@angular/core';
import { CategoryEvent } from 'app/models/category-event';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-category-events',
  templateUrl: './category-events.component.html',
  styleUrls: ['./category-events.component.scss']
})
export class CategoryEventsComponent implements OnInit {
  categoriesEvent : CategoryEvent[] = []; 
  
  collection = "categoryEvent";
  
  titulo = "Crear Categoria";
  buttonText= "Crear";
  loading = false;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    const resp = await this.api.getAll(this.collection);

    if(resp.size){
      this.categoriesEvent=[];
      resp.forEach(val =>{
        this.categoriesEvent.push({
          id:val.id,
          name: val.data()['name'],
          
        } as CategoryEvent);
      })
    }
  }

  async delete(id: string){
    this.loading = false;
    console.log("eliminar")
    try{
      await this.api.delete(this.collection, id)
    }catch{(e)=>{
      console.log(e)
    }}
     
    this.getData();
    this.loading = true;
  }
}
