import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CatalogService } from '../../shared/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private service: CatalogService,
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
