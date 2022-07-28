import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent implements OnInit {
  users : User[]= [];
  loading = false;
  collection = "users"
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    const resp = await this.api.getAll(this.collection);

    if(resp.size){
      this.users=[];
      resp.forEach(val =>{
        this.users.push({
          id:val.id,
          username: val.data()['username'],
          rol: val.data()['rol'],
          password:val.data()['password'],
          
        } as User);
      })
    }
  }

  async delete(id: string){
    this.loading = false;
    console.log("eliminar")
    try{
      await this.api.delete(this.collection, id)
    }catch{(e)=>{
      console.log(e)
    }}
     
    this.getData();
    this.loading = true;
  }

}
