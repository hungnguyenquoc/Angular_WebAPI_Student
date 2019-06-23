import { Injectable } from '@angular/core';
import { Semester } from './semester.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  formData: Semester;
  list: Semester[];
  constructor( private api: ApiService , private http: HttpClient) {  }
  postSem(formData: Semester ) {
    return this.http.post(this.api.Url.semester, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.semester + '/')
    .toPromise().then(res => this.list = res as  Semester[] );
  }
  putSem(formData: Semester ) {
    return this.http.put(this.api.Url.semester + '/' + formData.SEM_ID, formData);
  }
}
