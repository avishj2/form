import { Component } from '@angular/core';
import { EmployeeModel } from '../Models/Employy'; // Ensure the correct import path for EmployeeModel

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  public employee: EmployeeModel = new EmployeeModel(100); // Initialize with an ID

  dropdown = ['onboard', 'trainee'];

  showCustomPopup = false;

  constructor() {}

  closeCustomPopup(arg: any) {
    if(arg == true){
      this.showCustomPopup = false;
    }   
  }

  showEmployeeDetails() {
    if (this.isFormValid()) {
      this.showCustomPopup = true;
    } else {
      alert('Please fill in the required fields: Name, Qualification, and Status.');
    }
  }
  

  private isFormValid(): boolean {
    return (
      this.employee.name.trim() !== '' &&
      this.employee.qualification.trim() !== '' &&
      this.employee.isActive !== undefined
    );
  }
}
