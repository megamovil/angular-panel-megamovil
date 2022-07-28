import { Component, OnInit } from '@angular/core';
import { Modelo } from 'app/models/modelo';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {
  loading = false;
  modelos: Modelo[] = []
  collection = "modelos";
  constructor(private api:ApiService) { }
  
  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    const resp = await this.api.getAll(this.collection);

    if(resp.size){
      this.modelos=[];
      resp.forEach(val =>{
        this.modelos.push({
          id:val.id,
          name: val.data()['name'],
          lastName: val.data()['lastName'],
          dateOfBirth: val.data()['dataOfBirth'],
          gender: val.data()['gender'],
          socialSecurity:val.data()['socialSecurity'],
          townHall:val.data()['townHall'],
          nationality:val.data()['nationality'],
          isModel:val.data()['isModel'],
          height:val.data()['height'],
          eyesColor:val.data()['eyesColor'],
          skinColor:val.data()['skinColor'],
          hairColor:val.data()['hairColor'],
          size:val.data()['size'],
        } as Modelo);
      })
    }
  }

  async deleteModel(id: string){
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
