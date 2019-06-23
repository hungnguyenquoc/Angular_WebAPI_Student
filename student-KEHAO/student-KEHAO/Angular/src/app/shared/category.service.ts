import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { HttpClient} from '@angular/common/http';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  formData: Category;
  formDataI: Category;
  list: Category[];
  constructor( private api: ApiService, private http: HttpClient) {  }
  postCategory(formData: Category ) {
    return this.http.post(this.api.Url.category, formData);
  }
  refreshList() {
    this.http.get(this.api.Url.category + '/')
    .toPromise().then(res => this.list = res as Category[] );
  }
  putCategory(formData: Category ) {
    return this.http.put(this.api.Url.category + '/' + formData.CATE_ID, formData);
  }
}
