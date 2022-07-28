import { Component, OnInit } from '@angular/core';
import { TermsConditions } from 'app/models/terms-conditions';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  termsConditions : TermsConditions[] = [];
  collection = "termsConditions"
  loading = false;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }
  async getData() {
    const resp = await this.api.getAll(this.collection);
    if (resp.size > 0) {
      this.termsConditions = [];
      resp.forEach((doc) => {
        this.termsConditions.push({
          id: doc.id,
          file: doc.data()["file"],
          link: doc.data()["link"],
        } as TermsConditions);
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
