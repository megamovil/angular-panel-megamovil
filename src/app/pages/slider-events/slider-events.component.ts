import { Component, OnInit } from '@angular/core';
import { SliderEvent } from 'app/models/slider-event';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-slider-events',
  templateUrl: './slider-events.component.html',
  styleUrls: ['./slider-events.component.scss']
})
export class SliderEventsComponent implements OnInit {

  slidersEvent : SliderEvent[] = [];
  collection = "slidersEvent"
  loading = false;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }
  async getData(){
    const resp = await this.api.getAll(this.collection);
    if(resp.size > 0){
      this.slidersEvent = [];
      resp.forEach((doc) => {
        this.slidersEvent.push({
          id: doc.id,
          img: doc.data()['img'],
          link: doc.data()['link'],
          
        }as SliderEvent)
      })
    }
      
      
    
    
    
  }
  async delete(id:string) {
    this.loading = false;
    await this.api.delete(this.collection,id)
    this.loading = true;
  }
}
