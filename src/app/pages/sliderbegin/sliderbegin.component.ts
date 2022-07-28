import { Component, OnInit } from "@angular/core";
import { SliderBegin } from "app/models/slider-begin";
import { ApiService } from "app/services/api.service";

@Component({
  selector: "app-sliderbegin",
  templateUrl: "./sliderbegin.component.html",
  styleUrls: ["./sliderbegin.component.scss"],
})
export class SliderbeginComponent implements OnInit {
  slidersBegin: SliderBegin[] = [];
  collection = "slidersBegin";
  loading = false;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }
  async getData() {
    const resp = await this.api.getAll(this.collection);
    if (resp.size > 0) {
      this.slidersBegin = [];
      resp.forEach((doc) => {
        this.slidersBegin.push({
          id: doc.id,
          img: doc.data()["img"],
          link: doc.data()["link"],
        } as SliderBegin);
      });
    }
  }
  async delete(id: string) {
    this.loading = false;
    console.log("eliminar");
    try {
      await this.api.delete(this.collection, id);
      this.getData();
    
    this.loading = true;
    } catch {
      (e) => {
        console.log(e);
      };
    }
    
  }
}
