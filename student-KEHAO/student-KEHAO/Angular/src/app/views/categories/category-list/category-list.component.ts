import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/category.service';
import { Category } from '../../../shared/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private service: CategoryService) { }
  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(cate: Category) {
    this.service.formData = Object.assign({}, cate);
    this.service.formDataI = Object.assign({}, cate);
  }
}
