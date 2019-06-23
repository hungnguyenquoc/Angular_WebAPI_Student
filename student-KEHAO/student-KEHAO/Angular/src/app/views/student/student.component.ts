import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 // import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var $;
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {
   }
   ngOnInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable();
  }
   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
   }
}
