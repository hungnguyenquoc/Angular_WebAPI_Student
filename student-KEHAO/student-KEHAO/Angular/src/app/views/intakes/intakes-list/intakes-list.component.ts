import { Component, OnInit } from '@angular/core';
import { IntakeService } from '../../../shared/intake.service';
import { Intake } from '../../../shared/intake.model';

@Component({
  selector: 'app-intakes-list',
  templateUrl: './intakes-list.component.html',
  styleUrls: ['./intakes-list.component.scss']
})
export class IntakesListComponent implements OnInit {

  constructor(private service: IntakeService) { }
  private id: number;
  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(intk: Intake) {
    this.service.formData = Object.assign({}, intk);
    this.service.formDataI = Object.assign({}, intk);
  }
  loadID(idd: number) {
    this.id = idd;
  }
  onDelete(idd: number) {
    this.service.deleteIntake(idd).subscribe(res => {
     this.service.refreshList(); });
  }
}
