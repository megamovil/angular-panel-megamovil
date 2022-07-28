import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/models/user';

import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  collection = "users";
  user: User = {};
  constructor(private api:ApiService,private route :Router) { }

  ngOnInit(): void {
  }

  async signIn(){
    console.log("entrando....")
    const resp = await this.api.getAll(this.collection);

    resp.forEach(doc =>{
      if(this.user.username == doc.data()['username'] && this.user.password == doc.data()['password']){
        this.route.navigate(['/dashboard']);
      }
    } )

  }

}
