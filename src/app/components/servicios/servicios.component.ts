import { Component, OnInit } from '@angular/core';
import { Servicio } from 'app/models/servicio';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }
  filterText:string="";
  servicios: Servicio[] =[];
  servicio:Servicio = {image:'',name:''};
  collection:string="servicios";
  //get data
  async getData(){
    const resp = await this.api.getAll(this.collection);
    if(resp.size >0){
      resp.forEach((doc)=>{
        this.servicios.push({
          id: doc.id,
          image: doc.data()['image'],
          name: doc.data()['name'],

        } as Servicio)
      } )
    }
    console.log(this.servicios)
  }

  async deleteData(id){
    const resp = await this.api.delete(this.collection,id);
    if(resp){
      this.getData();
      console.log("borrado");
    }
  }
}
