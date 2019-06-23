import { Injectable } from '@angular/core';
import { Catalog } from './catalog.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  [x: string]: any;
  formData1: Catalog;
  list1: Catalog[];
  readonly rootURL = 'https://localhost:44331/api';
  constructor(private http: HttpClient) { }
  // postIntake(formData: Catalog) {
  //   return this.http.post(this.rootURL + '/INTAKE', formData);
  // }

  // putIntake(formData: Intake) {
  //   return this.http.put(this.rootURL + '/INTAKE' + formData.INTAKE_ID, formData);
  // }
  refreshList() {
    this.http.get(this.rootURL + '/CATALOG')
    .toPromise().then(res => this.list1 = res as Catalog[]);
  }
}
