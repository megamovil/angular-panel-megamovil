import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-list-notifications',
  templateUrl: './list-notifications.component.html',
  styleUrls: ['./list-notifications.component.scss']
})
export class ListNotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  constructor(private api :ApiService) { }

  ngOnInit(): void {
    this.getData();
  }
  async getData(){
    const resp = await this.api.getAll("notifications");
    if(resp.size > 0){
      resp.forEach(doc =>{
        this.notifications.push({
          title: doc.data()['title'],
          body: doc.data()['body'],
        }as Notification)
      } );
    }
   else{
    console.log("vacio")
   }
  }
}
