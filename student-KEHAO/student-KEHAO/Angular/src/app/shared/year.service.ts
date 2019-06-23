import { Injectable } from '@angular/core';
import { Year } from './year.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class YearService {
  formData: Year;
  list: Year[];

  constructor( private api: ApiService , private http: HttpClient) {  }
  postYear(formData: Year ) {
    return this.http.post(this.api.Url.year, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.year + '/')
    .toPromise().then(res => this.list = res as  Year[] );
  }
  putYear(formData: Year ) {
    return this.http.put(this.api.Url.year + '/' + formData.YEAR_ID, formData);
  }
}
