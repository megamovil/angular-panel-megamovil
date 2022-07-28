import { Component, OnInit } from '@angular/core';
import { Notification } from 'app/models/notification';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-notificationss',
  templateUrl: './notificationss.component.html',
  styleUrls: ['./notificationss.component.scss']
})
export class NotificationssComponent implements OnInit {
  notification:Notification = {};
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  handle(){

  }

  async sendNotification(){
    var keyServer = "AAAAaiMH0qo:APA91bGEzw69rl-FwNCao1lwAc2gfjp5iaiMUF1FdsA7m1kLpY75fKgXbkHPLjUPAY6Z11kpfO6nt8dbEJaY9FLD-cTi2AVq2ke25AB1u5310s1WfiLYxW0C35GFlS_qOkzS9fDoJJpH";
    var messageJson= 
    {
      "priority": "high",
      "to":"dSiJ4uHHTX-ucvP5Yx5u_W:APA91bHWQ3BpvpT277KfjD3bEX6ahuZktxItzHjXfEyfF0Oj0n6JVLGGQodd2tjmvLpKtepqO4rRtUYLU_lw-aO0mBVNSw5gKxqDaJs51KgVobPZ9gLG9AYNiS1S47JBH58AGO2tGEbI",
          "data":{
            "key1":"This is an FCM notification message!",
            "key2":"FCM Message"
          },
          "notification" :{
              "title": this.notification.title,
              "body":this.notification.body
          }
    }
    fetch("https://fcm.googleapis.com/fcm/send",{
      method:"POST",
      headers: new Headers({
        Authorization: "key=AAAAlNORZDE:APA91bF9aQpXJv68hW3UhjGyAe9v3yikzz0G-8RKL51dDTVEwQSaCRE4NWlwRuAd_E7eGEeyVqgK4HmYAET0wg_VV5ygwxNQuKKeQV3DVpt9OmvAdkV2G57kvSH59zIp-8xkXu48G11f",
        'Content-Type' : 'application/json'
      }),
      body: JSON.stringify(messageJson)
    }).then(
      res => res.json()
    ).then(data => {this.saveNotification()
    alert("Enviado")});
  }
  async saveNotification(){
    const resp = await this.api.create("notifications",this.notification);
    if(resp){
      console.log("created successfully");
    }else{
      console.log("errro");
    }
  }
}
