import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/category.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CatalogService } from '../../../shared/catalog.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service: CategoryService
    ) { }

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
  onSubmit(form: NgForm) {
    if (form.value.CATE_ID == null) {
      this.inserRecord(form);
    } else {
      this.updateRecord(form);
    }
    }
    inserRecord(form: NgForm) {
    this.service.postCategory(form.value).subscribe(res => {
      this.resetForm(form);  this.service.refreshList(); });
    }
    updateRecord(form: NgForm) {
    this.service.putCategory(form.value).subscribe(res => {
    this.resetForm(form);  this.service.refreshList(); }

    );
    }
}
