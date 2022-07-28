import { Component, OnInit } from '@angular/core';
import { CategoryBegin } from 'app/models/category-begin';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-category-begin',
  templateUrl: './category-begin.component.html',
  styleUrls: ['./category-begin.component.scss']
})
export class CategoryBeginComponent implements OnInit {
  categoriesBegin : CategoryBegin[] = []; 
  collection = "categoryBegin";
  
  titulo = "Crear Categoria";
  buttonText= "Crear";
  loading = false;
  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }
 
  async getData(){
    const resp = await this.api.getAll(this.collection);

    if(resp.size){
      this.categoriesBegin=[];
      resp.forEach(val =>{
        this.categoriesBegin.push({
          id:val.id,
          name: val.data()['name'],
          
        } as CategoryBegin);
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
