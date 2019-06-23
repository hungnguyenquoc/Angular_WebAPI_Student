import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SemesterService } from '../../../shared/semester.service';

@Component({
  selector: 'app-semester-change',
  templateUrl: './semester-change.component.html',
  styleUrls: ['./semester-change.component.scss']
})
export class SemesterChangeComponent implements OnInit {

  constructor(private service: SemesterService) { }

  ngOnInit() {
    this.resetForm();
    this.service.refreshList();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
    SEM_ID: null,
    SEM_NAME: '',
    PRIORITY: null,
    STATUS: 1,
  };
  }
  onSubmit(form: NgForm) {
  if (form.value.SEM_ID == null) {
    this.inserRecord(form);
  } else {
    this.updateRecord(form);
  }
  }

  inserRecord(form: NgForm) {
  this.service.postSem(form.value).subscribe(res => {
    this.resetForm(form);  this.service.refreshList(); });
  }

  updateRecord(form: NgForm) {
  this.service.putSem(form.value).subscribe(res => {
  this.resetForm(form);  this.service.refreshList(); });
  }

}
