import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../shared/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {

  constructor(private service: CategoryService,
    private toastr: ToastrService
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
      STATUS : null,
      SQUENCE_NUM : null,
      NOTE : null,
      INTYPE_ID : 0

    };
  }
  onSubmit(form: NgForm) {
      this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
     this.service.postCategory(form.value).subscribe(res => {this.toastr.success('Inserted successfully', 'Category Inserted');
     this.resetForm(form);
     this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putCategory(form.value).subscribe(res => {this.toastr.success('Updated successfully', 'Category Updated');
    this.resetForm(form);
    this.service.refreshList();
  });
  }

}
