import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modelo } from 'app/models/modelo';
import { ApiService } from 'app/services/api.service';
import { ifError } from 'assert';

@Component({
  selector: 'app-details-modelos',
  templateUrl: './details-modelos.component.html',
  styleUrls: ['./details-modelos.component.scss']
})
export class DetailsModelosComponent implements OnInit {
  modelo : Modelo ={};
  collection = "modelos";
  id :string;
  constructor(private api:ApiService,private route:Router,private aRouter: ActivatedRoute) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.getModel();
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
      photoOne:resp.data()['photoOne'],
      photoTwo:resp.data()['photoTwo'],
      photoThree:resp.data()['photoThree'],
      photoFour:resp.data()['photoFour'],
      ine:resp.data()['ine'],
      voucherOfHome:resp.data()['voucherOfHome'],
      stateOfAccount:resp.data()['stateOfAccount'],
      rfc:resp.data()['rfc'],
      fm2:resp.data()['fm2']
    }
    }
    
  }
}
