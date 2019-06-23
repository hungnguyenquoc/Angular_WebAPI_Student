import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/category.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-category-changed',
  templateUrl: './category-changed.component.html',
  styleUrls: ['./category-changed.component.css']
})
export class CategoryChangedComponent implements OnInit {

  constructor(private service: CategoryService,
    private toastr: ToastrService) { }

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
      INTYPE_ID : 0

    };
  }
  onSubmit(form: NgForm) {
      this.updateRecord(form);
  }
  loadForm() {
      this.service.formData = this.service.formDataI;
  }
  updateRecord(form: NgForm) {
    this.service.putCategory(form.value).subscribe(res => {
    this.toastr.warning('Are you the six fingered man?');
    this.resetForm(form);
    this.service.refreshList();
  });
  }
}
