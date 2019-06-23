import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {}
  baseurl = 'https://localhost:44331/api/';
  Url = {
    intake: this.baseurl + 'INTAKE',
    category: this.baseurl + 'CATELOGY',
    catalog: this.baseurl + 'CATALOG',
    semester: this.baseurl + 'SEMESTER',
    year: this.baseurl + 'YEAR'
  };
}
