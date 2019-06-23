import { Component, OnInit } from '@angular/core';
import { IntakeService } from '../../../shared/intake.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Intake } from '../../../shared/intake.model';

@Component({
  selector: 'app-intake-change',
  templateUrl: './intake-change.component.html',
  styleUrls: ['./intake-change.component.scss']
})
export class IntakeChangeComponent implements OnInit {

  constructor(private service: IntakeService,
    private toastr: ToastrService) { }
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
  loadForm() {
      this.service.formData = this.service.formDataI;
  }
  inserRecord(form: NgForm) {
  this.service.postIntake(form.value).subscribe(res => {
    // this.toastr.success('Inserted successfully', 'Intake');
    this.resetForm(form);  this.service.refreshList(); });
  }

  updateRecord(form: NgForm) {
    this.service.putIntake(form.value).subscribe(res => {this.toastr.success('Updated successfully', 'Category Updated');
    this.resetForm(form);
    this.service.refreshList();
  });
  }

}
