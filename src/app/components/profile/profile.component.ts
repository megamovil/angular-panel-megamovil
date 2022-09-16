import { Component, OnInit,Input, Injectable } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';
import { ApiService } from 'app/services/api.service';
import { Profile } from 'app/models/profile';
import { Estado } from 'app/models/estado';
import { ToastrService } from 'ngx-toastr';
import { Distribuidor } from 'app/models/distribuidor';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
@Injectable()
export class ProfileComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  constructor(private api:ApiService,private toastr:ToastrService ) { }

  ngOnInit(): void {
    this.getData();
    this.getDistribuidores();
  }
  profile:Profile={saldo:0};
  collection="profile";
  estadoid= "";
  estados :Estado[]=[
    {id:"1",name:"Aguas Calientes"},
    {id:"2",name:"Baja California"},
    {id:"3",name:"Baja California Sur"},
    {id:"4",name:"Campeche"},
    {id:"5",name:"Chiapas"},
    {id:"6",name:"Chihuahua"},
    {id:"7",name:"Ciudad de México"},
    {id:"8",name:"Coahuila"},
    {id:"9",name:"Colima"},
    {id:"10",name:"Durango"},
    {id:"11",name:"Estado de México"},
    {id:"12",name:"Guanajuato"},
    {id:"13",name:"Guerrero"},
    {id:"14",name:"Hidalgo"},
    {id:"15",name:"Jalisco"},
    {id:"16",name:"Michoacán"},
    {id:"17",name:"Morelos"},
    {id:"18",name:"Nayarit"},
    {id:"19",name:"Nuevo León"},
    {id:"20",name:"Oaxaca"},
    {id:"21",name:"Puebla"},
    {id:"22",name:"Querétaro"},
    {id:"23",name:"Quintana Roo"},
    {id:"24",name:"San Luis Potosí"},
    {id:"25",name:"Sinaloa"},
    {id:"26",name:"Sonora"},
    {id:"27",name:"Tabasco"},
    {id:"28",name:"Tamaulipas"},
    {id:"29",name:"Tiaxcala"},
    {id:"30",name:"Veracruz"},
    {id:"31",name:"Yucatán"},
    {id:"32",name:"Zacatecas"},

  ];
  id:string;
  cashRecharge:number;
  async recharge(){
    this.profile.saldo = Math.round((parseFloat(this.profile.saldo.toString())  +parseFloat(this.cashRecharge.toString()))*100 + Number.EPSILON)/100 ;
    const resp = await this.api.update("profile","aa4NZoVut5WVcVMjhpZO",this.profile);
    this.showToast();
    this.getData();
  }
  showToast(){
    this.toastr.success("Saldo agregado","Informe de saldo")
  }
  async getData(){
    const resp = await this.api.getOne("profile","aa4NZoVut5WVcVMjhpZO");
    if(resp){
      this.profile = {
        saldo: resp.data()['saldo'],
        name: resp.data()['name'],
      };
    }
  }
  distribuidores:Distribuidor[]= [];
  async getDistribuidores(){
    const resp = await this.api.getAll("distribuidores");
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
    console.log(this.distribuidores);
  }
  
}
