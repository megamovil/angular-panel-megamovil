import { Component, OnInit } from '@angular/core';
import { Distribuidor } from 'app/models/distribuidor';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-distribuidores',
  templateUrl: './distribuidores.component.html',
  styleUrls: ['./distribuidores.component.scss']
})
export class DistribuidoresComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }
  filterText:string="";
  distribuidores: Distribuidor[] =[];
  distribuidor:Distribuidor = {};
  collection:string="distribuidores";
  async getData(){
    const resp = await this.api.getAll(this.collection);
    if(resp.size >0){
      resp.forEach((doc)=>{
        this.distribuidores.push({
          id: doc.id,
          name: doc.data()['name'],
          email: doc.data()['email'],
          password: doc.data()['password'],
          phone: doc.data()['phone'],
          photo: doc.data()['photo'],
          tituloCargo: doc.data()['tituloCargo'],
          user: doc.data()['user'],
        } as Distribuidor)
      } )
    }
   
  }
  async deleteData(id){
    const resp = await this.api.delete(this.collection,id);
    if(resp){
      this.getData();
      console.log("borrado");
    }
  }
}
