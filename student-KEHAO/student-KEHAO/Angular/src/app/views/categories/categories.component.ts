import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      CATE_ID : null,
      NAME_EN : '',
      NAME_VI : '',
      STATUS : 1,
      SQUENCE_NUM : null,
      NOTE : null,
      INTYPE_ID : 1

    };
  }
}
