import { Component, OnInit,Input, Injectable } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';
import { ApiService } from 'app/services/api.service';
import { Profile } from 'app/models/profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
@Injectable()
export class ProfileComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }
  profile:Profile={saldo:0};
  collection="profile";
  id:string;
  cashRecharge:number;
  async recharge(){
    this.profile.saldo = this.cashRecharge;
    const resp = await this.api.update("profile","aa4NZoVut5WVcVMjhpZO",this.profile);
    
    this.getData();
  }
  async getData(){
    const resp = await this.api.getOne("profile","aa4NZoVut5WVcVMjhpZO");
    if(resp){
      this.profile = {
        saldo: resp.data()['saldo'],
        name: resp.data()['name'],
      };
    }
  }
  
}
