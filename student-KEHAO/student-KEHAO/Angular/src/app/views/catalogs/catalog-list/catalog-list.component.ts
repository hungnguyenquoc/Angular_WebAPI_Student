import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CatalogService } from '../../../shared/catalog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {

  constructor(private service: CatalogService,
    private toastr: ToastrService) { }

  ngOnInit() {
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
      this.updateRecord(form);
  }

  updateRecord(form: NgForm) {
    this.service.putCategory(form.value).subscribe(res => {this.toastr.success('Updated successfully', 'Category Updated');
    this.resetForm(form);
    this.service.refreshList();
  });
  }

}
