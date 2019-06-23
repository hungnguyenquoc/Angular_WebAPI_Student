import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { YearService } from '../../../shared/year.service';

@Component({
  selector: 'app-year-change',
  templateUrl: './year-change.component.html',
  styleUrls: ['./year-change.component.scss']
})
export class YearChangeComponent implements OnInit {

  constructor(private service: YearService) { }

  ngOnInit() {
    this.resetForm();
    this.service.refreshList();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
    YEAR_ID: null,
    YEAR1: null,
    STATUS: 1,
  };
  }
  onSubmit(form: NgForm) {
  if (form.value.YEAR_ID == null) {
    this.inserRecord(form);
  } else {
    this.updateRecord(form);
  }
  }

  inserRecord(form: NgForm) {
  this.service.postYear(form.value).subscribe(res => {
    this.resetForm(form);  this.service.refreshList(); });
  }

  updateRecord(form: NgForm) {
  this.service.putYear(form.value).subscribe(res => {
  this.resetForm(form);  this.service.refreshList(); });
  }



}
