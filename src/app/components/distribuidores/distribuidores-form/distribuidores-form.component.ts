import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Distribuidor } from 'app/models/distribuidor';
import { Estado } from 'app/models/estado';
import { Recarga } from 'app/models/recarga';
import { Servicio } from 'app/models/servicio';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-distribuidores-form',
  templateUrl: './distribuidores-form.component.html',
  styleUrls: ['./distribuidores-form.component.scss']
})
export class DistribuidoresFormComponent implements OnInit {

  constructor(private api: ApiService,private router: Router,
    private aRouter: ActivatedRoute) { 
      this.id = this.aRouter.snapshot.paramMap.get("id");
    }

  ngOnInit(): void {
    this.getDataServicios();
      this.getDataRecargas();
    if(this.id != null){
      this.data();
      
      
    }
  }
  file: File = null;
  title: string = "";
  id:string;
  distribuidor:Distribuidor = {pServicio:[],pRecarga:[],active:false};
  servicios: Servicio[]= [];
  recargas : Recarga[]=[];
  collection= "distribuidores";
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
  //handle of register o update
  async handle() {
    if (this.id != null) {
      if(this.file != null){
        this.api.deleteFile(this.distribuidor.photo);
        await this.uploadFile();
      }
      this.update();
    } else {
      await this.uploadFile();
      this.create();
    }
  }

  //change file photo
  async changeFile(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  async changeCheckBoxRecargas(event){
    console.log(this.distribuidor.pRecarga);
    if(event.target.checked){
      console.log(event.target.value)
      this.distribuidor.pRecarga.push(event.target.value );
    }else{
      console.log("eliminado")
      this.distribuidor.pRecarga.splice(this.distribuidor.pRecarga.indexOf(event.target.value),1)
    }
    console.log(this.distribuidor.pRecarga);
  }
  async changeCheckBoxServicios(event){
    
    
    if(event.target.checked){
      console.log(event.target.value)
      this.distribuidor.pServicio.push(event.target.value );
    }else{
      console.log("eliminado")
      this.distribuidor.pServicio.splice(this.distribuidor.pServicio.indexOf(event.target.value),1)
    }
    console.log(this.distribuidor.pServicio);
  }
  validCheckedServicios(id: any):boolean{
    console.log(this.distribuidor.pServicio)
    return this.distribuidor.pServicio.some(elt => elt === id);
  }
  validCheckedRecargas(id: any):boolean{
    console.log(this.distribuidor.pRecarga)
    return this.distribuidor.pRecarga.some(elt => elt === id);
  }

  //upload photo file
  async uploadFile() {
    const filename = new Date().toISOString();
    var nameFile = filename;
    let ref = this.api.fileRef(filename);
    let task = await this.api.uploadFile(filename, this.file);
    this.distribuidor.photo = await ref.getDownloadURL().toPromise();
  }
  
  async create(){
    const resp = await this.api.create(this.collection,this.distribuidor);
    if(resp){
      this.router.navigate(['Distribuidores']);
    }
  }
  async data(){
    const resp = await this.api.getOne(this.collection,this.id);
    console.log(resp.data()['name']);
    if(resp){
      this.distribuidor = {
        id: resp.id,
        name: resp.data()['name'],
        email: resp.data()['email'],
        password: resp.data()['password'],
        phone: resp.data()['phone'],
        photo: resp.data()['photo'],
        nameOfBusiness: resp.data()['nameOfBusiness'],
        pServicio: resp.data()['pServicio'],
        pRecarga: resp.data()['pRecarga'],
        estado: resp.data()['estado'],
        active: resp.data()['active'],
        
      };
    }

  }
  async getDataServicios(){
    const resp = await this.api.getAll("servicios");
    if(resp.size > 0){
      resp.forEach((doc)=>{
        this.servicios.push({
          id: doc.id,
          image: doc.data()['image'],
          name: doc.data()['name'],
        } as Servicio)
      })
    }
    console.log(this.servicios)
  }
  async getDataRecargas(){
    const resp = await this.api.getAll("recargas");
    if(resp.size > 0){
      resp.forEach((doc)=>{
        this.recargas.push({
          id: doc.id,
          image: doc.data()['image'],
          name: doc.data()['name'],
        } as Recarga)
      })
    }
  }
  async update(){
    try{
      const resp = await this.api.update(this.collection,this.id,this.distribuidor);
      this.router.navigate(['/Distribuidores']);
    }catch(e){
      console.log(e)
    }
    
    
  }
}
