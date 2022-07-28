import { Component, OnInit } from '@angular/core';
import { Modelo } from 'app/models/modelo';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-form-modelos',
  templateUrl: './form-modelos.component.html',
  styleUrls: ['./form-modelos.component.scss']
})
export class FormModelosComponent implements OnInit {
  collection = "modelos"
  modelo:Modelo={};
  titulo = "Crear modelo";
  buttonText= "Crear";
  loading = false;
  photoOne : File = null;
  photoTwo : File = null;
  photoThree : File = null;
  photoFour : File = null;

  ine:File= null ;

  voucherOfHome :File= null;

  stateOfAccount : any= null;

  rfc:File= null;

  fm2:File= null;

  id:string;

  con : File[] = [];

  urls: Array<string> =[];
  constructor(private api : ApiService,private aRouter:ActivatedRoute ,private router: Router,) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
    
    console.log(this.id);
   }

  ngOnInit(): void {
    this.getModel();
    if(this.id != null){
      this.titulo = "Editar modelo";
      this.buttonText = "Editar";
    }
  }
  async handle(){
    if(this.id == null){
      await this.uploadFile();
      this.createModel();
    }else{
      this.updateModel();
    }
  }
  async getModel(){
    if(this.id != null){
      const resp = await this.api.getOne(this.collection,this.id);
    console.log(this.modelo);
    this.modelo = {
      name: resp.data()['name'],
      lastName: resp.data()['lastName'],
      dateOfBirth: resp.data()['dateOfBirth'],
      gender: resp.data()['gender'],
      socialSecurity:resp.data()['socialSecurity'],
      townHall:resp.data()['townHall'],
      nationality:resp.data()['nationality'],
      isModel:resp.data()['isModel'],
      height:resp.data()['height'],
      eyesColor:resp.data()['eyesColor'],
      skinColor:resp.data()['skinColor'],
      hairColor:resp.data()['hairColor'],
      size:resp.data()['size'],
    }
    }
    
  }

  async changeFile(event,file:File) {
    if (event.target.files.length > 0) {
      this.con =event.target.files; 
      console.log(this.con)
      file = event.target.files[0];
      console.log(file)
      console.log(file.name);
      console.log("nombre "+this.stateOfAccount);
    }
  }
  test(){
    this.urls.push("joel");
    this.urls.push("carlos");
    console.log(this.urls);
  }
  async uploadFile() {
    var files = [
      this.photoOne,
      this.photoTwo,
      this.photoThree,
      this.photoFour,
      this.ine,
      this.voucherOfHome,
      this.stateOfAccount,
      this.rfc,
      this.fm2
    ];
    console.log(files);
    await files.map( async f =>{
      const filename = f.name;
    console.log(f.name);
    let ref = this.api.fileRef(filename);
    let task = await this.api.uploadFile(filename, f);
    let dato = await ref.getDownloadURL().toPromise();
    this.urls.push(dato); 
    })
    console.log(this.urls.toString());
    console.log(this.urls);
    console.log(this.urls[0]);
    this.modelo.photoOne = this.urls[0];
    this.modelo.photoTwo = this.urls[1];
    this.modelo.photoThree = this.urls[2];
    this.modelo.photoFour = this.urls[3];
    this.modelo.ine = this.urls[4];
    this.modelo.voucherOfHome = this.urls[5];
    this.modelo.stateOfAccount = this.urls[6];
    this.modelo.rfc = this.urls[7];
    this.modelo.fm2 = this.urls[8];

    console.log(this.modelo)

  }
  // async updateFile() {
  //   const name = this.sliderBegin.link;
  //   console.log(name);
  //   await this.api.updateFile(name, this.file, this.id, this.collection);
  // }

  async createModel(){
    this.loading = false;
    const resp = await this.api.create(this.collection,this.modelo);
    if(resp){
      this.router.navigate(['/modelos']);
    }else{
      console.log("error naco ");
    }
    this.loading = true;
  }

  async updateModel(){
    this.loading = false;
    try{
      console.log(this.modelo)
       this.api.update(this.collection,this.id,this.modelo);
      this.router.navigate(['/modelos']);
    }catch{e=>{
      console.log(e);
    }}
    
    
    this.loading = true;
  }

  async changeFilePhotoone(event) {
    if (event.target.files.length > 0) {
      this.photoOne =event.target.files[0]; 
     
    }
  }
  async changeFilePhototwo(event) {
    if (event.target.files.length > 0) {
      this.photoTwo =event.target.files[0]; 
     
    }
  }
  async changeFilePhotothree(event) {
    if (event.target.files.length > 0) {
      this.photoThree =event.target.files[0]; 
     
    }
  }
  async changeFilePhotofour(event) {
    if (event.target.files.length > 0) {
      this.photoFour =event.target.files[0]; 
     
    }
  }
  async changeFileIne(event) {
    if (event.target.files.length > 0) {
      this.ine =event.target.files[0]; 
     
    }
  }
  async changeFileVoucherOfHouse(event) {
    if (event.target.files.length > 0) {
      this.voucherOfHome =event.target.files[0]; 
     
    }
  }
  async changeFileStateOfAccount(event) {
    if (event.target.files.length > 0) {
      this.stateOfAccount =event.target.files[0]; 
     
    }
  }
  async changeFileRfc(event) {
    if (event.target.files.length > 0) {
      this.rfc =event.target.files[0]; 
     
    }
  }
  async changeFileFm2(event) {
    if (event.target.files.length > 0) {
      this.fm2 =event.target.files[0]; 
     
    }
  }

}
