import { Component, OnInit ,ElementRef, ViewChild} from '@angular/core';
import { Distribuidor } from 'app/models/distribuidor';
import { ApiService } from 'app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-distribuidores',
  templateUrl: './distribuidores.component.html',
  styleUrls: ['./distribuidores.component.scss']
})
export class DistribuidoresComponent implements OnInit {
  
  constructor(private api: ApiService,private toastr:ToastrService ) { }

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
          nameOfBusiness: doc.data()['nameOfBusiness'],
          active: doc.data()['active'],
          estado: doc.data()['estado'],

        } as Distribuidor)
      } )
    }
   
  }
  async activate(id,distribuidor){
    if(distribuidor.active){
      distribuidor.active = false;
      this.toastr.show("Distribuidor desactivado")
    }else{
      distribuidor.active = true;
      this.toastr.success("Distribuidor activado")
    }
    const resp = await this.api.update(this.collection,id,distribuidor);
    
  }
  async deleteData(id){
    const resp = await this.api.delete(this.collection,id);
    if(resp){
      this.distribuidores = [];
      this.getData();
      console.log("borrado");
    }
  }
}
