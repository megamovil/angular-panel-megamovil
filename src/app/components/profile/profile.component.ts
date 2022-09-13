import { Component, OnInit,Input } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  constructor(private modalService: MdbModalService) { }

  ngOnInit(): void {
  }
  openModal() {
    this.modalRef = this.modalService.open(ModalComponent)
  }
}
