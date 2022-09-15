import { Component, OnInit, Input, Injectable } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  @Input() name;
  constructor(public modalRef: MdbModalRef<ModalComponent>) { }

  ngOnInit(): void {
  }
  
}
