import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SliderBegin } from "app/models/slider-begin";
import { ApiService } from "app/services/api.service";

@Component({
  selector: "app-slider-begin-form",
  templateUrl: "./slider-begin-form.component.html",
  styleUrls: ["./slider-begin-form.component.scss"],
})
export class SliderBeginFormComponent implements OnInit {
  sliderBegin: SliderBegin = {};
  titulo = "Crear Slider";
  buttonText = "Crear";
  collection = "slidersBegin";
  file: File = null;
  id: string;
  constructor(
    private api: ApiService,
    private router: Router,
    private aRouter: ActivatedRoute
  ) {
    this.id = this.aRouter.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.getData();
  }
  async handle() {
    if (this.id != null) {
      this.updateFile();
      this.update();
    } else {
      await this.uploadFile();
      this.create();
    }
  }
  async create() {
    const resp = await this.api.create(this.collection, this.sliderBegin);
    if (resp) {
      this.router.navigate(["sliderInicio"]);
    } else {
      console.log("erro naco");
    }
  }
  async update() {
    try {
      const resp = await this.api.update(
        this.collection,
        this.id,
        this.sliderBegin
      );
      this.router.navigate(["sliderInicio"]);
    } catch {
      (e) => {
        console.log(e);
      };
    }
  }
  async changeFile(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  async uploadFile() {
    const filename = new Date().toISOString();
    this.sliderBegin.img = filename;
    let ref = this.api.fileRef(filename);
    let task = await this.api.uploadFile(filename, this.file);
    this.sliderBegin.link = await ref.getDownloadURL().toPromise();
  }
  async updateFile() {
    const name = this.sliderBegin.link;
    console.log(name);
    await this.api.updateFile(name, this.file, this.id, this.collection);
  }
  async delete(id: string) {
    await this.api.delete(this.collection, id);
  }
  async getData() {
    if (this.id != null) {
      this.titulo = "Editar slider";
      this.buttonText = "Editar";
      const resp = await this.api.getOne(this.collection, this.id);
      console.log(this.sliderBegin);
      this.sliderBegin = {
        img: resp.data()["img"],
        link: resp.data()["link"],
      };
    }
  }
}
