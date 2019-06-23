import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IntakeService } from '../../../shared/intake.service';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.scss']
})
export class IntakeComponent implements OnInit {
  toastr: any;

  constructor(private service: IntakeService) { }

  ngOnInit() {
    this.resetForm();
    this.service.refreshList1();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
    INTAKE_ID: null,
    CATA_ID: 1,
    INTAKE_CODE: '',
    INTAKE_NAME: '',
    STATUS: 1,
    };
  }
  onSubmit(form: NgForm) {
  if (form.value.INTAKE_ID == null) {
    this.inserRecord(form);
  } else {
    this.updateRecord(form);
  }
  }

  inserRecord(form: NgForm) {
  this.service.postIntake(form.value).subscribe(res => {
    this.resetForm(form);  this.service.refreshList(); });
  }

  updateRecord(form: NgForm) {
  this.service.putIntake(form.value).subscribe(res => {
  this.resetForm(form);  this.service.refreshList(); });
  }

}

