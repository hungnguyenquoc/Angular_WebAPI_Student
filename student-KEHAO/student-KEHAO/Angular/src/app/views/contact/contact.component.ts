import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent  {
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('largeModal') public largeModal: ModalDirective;
//   constructor() { }

//   ngOnInit() {
// }
}
