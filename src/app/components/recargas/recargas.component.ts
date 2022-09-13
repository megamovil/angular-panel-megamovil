import { Component, OnInit } from '@angular/core';
import { Recarga } from 'app/models/recarga';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.scss']
})
export class RecargasComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();

  }
  filterText:string="";
  recargas: Recarga[] =[];
  recarga:Recarga = {image:'',name:''};
  collection:string="recargas";
  //get data
  async getData(){
    const resp = await this.api.getAll(this.collection);
    if(resp.size >0){
      resp.forEach((doc)=>{
        this.recargas.push({
          id: doc.id,
          image: doc.data()['image'],
          name: doc.data()['name'],

        } as Recarga)
      } )
    }
    console.log(this.recargas)
  }
  async deleteData(id){
    const resp = await this.api.delete(this.collection,id);
    if(resp){
      this.getData();
      console.log("borrado");
    }
  }
}
