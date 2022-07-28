import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SliderEvent } from 'app/models/slider-event';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-slider-events-form',
  templateUrl: './slider-events-form.component.html',
  styleUrls: ['./slider-events-form.component.scss']
})
export class SliderEventsFormComponent implements OnInit {
  sliderEvent: SliderEvent = {};
  titulo = "Crear Slider";
  buttonText = "Crear";
  collection = "slidersEvent";
  file:File = null;
  id:string;
  
  constructor(private api: ApiService,
    private router: Router,
    private aRouter: ActivatedRoute) { 
      this.id = this.aRouter.snapshot.paramMap.get("id");
    }

  ngOnInit(): void {
    this.getData();
  }
  async handle() {
    if(this.id != null){
      await this.updateFile();
      this.update();
    }else{
      await this.uploadFile();
      this.create();

    }
  }
  async create() {
   
    const resp = await this.api.create(this.collection, this.sliderEvent);
    if (resp) {
      this.router.navigate(["slidersEvento"]);
    }else{
      console.log("erro naco")
    }
  }
  async update() {
    try{
      const resp = await this.api.update(this.collection,this.id,this.sliderEvent);
      this.router.navigate(["slidersEvento"]);
    }catch{e=>{
      console.log(e);
    }}
    
  }
  async updateFile() {
    const name = this.sliderEvent.img;
    console.log(name);
    await this.api.updateFile(name, this.file, this.id, this.collection);
  }
  async changeFile(event) {
    if(event.target.files.length > 0){
      this.file = event.target.files[0];
    }
  }


  async uploadFile() {
    const filename = new Date().toISOString();
    this.sliderEvent.img = filename;
    let ref = this.api.fileRef(filename);
    let task = await this.api.uploadFile(filename,this.file);
    this.sliderEvent.link = await ref.getDownloadURL().toPromise();
  }
  
  async getData() {
    if (this.id != null) {
      this.titulo = "Editar slider";
      this.buttonText = "Editar";
      const resp = await this.api.getOne(this.collection, this.id);
      console.log(this.sliderEvent);
      this.sliderEvent = {
        img: resp.data()["img"],
        link: resp.data()["link"],
      };
    }
  }
}
