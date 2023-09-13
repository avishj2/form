// employee-details-popup.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-details-popup',
  templateUrl: './employee-details-popup.component.html',
  styleUrls: ['./employee-details-popup.component.scss'],
})
export class EmployeeDetailsPopupComponent {
  @Input() employee: any; // You can define a proper type for EmployeeModel
  @Output() closePopupEvent :EventEmitter<boolean> = new EventEmitter();

  closePopup() {
    this.closePopupEvent.emit(true);
  }
}
