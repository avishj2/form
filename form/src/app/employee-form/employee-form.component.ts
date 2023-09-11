import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent {
  employee: any = {
    name: '',
    designation: '',
    joiningDate: '',
    projectType: '',
    qualification: '',
    isActive: false,
  };
  dropdown = ['onboard', 'trainee'];

  showCustomPopup = false; 

  

  closeCustomPopup() {
    
    this.showCustomPopup = false;
  }

  showEmployeeDetails() {
    if (this.employee.name && this.employee.qualification && this.employee.isActive !== undefined) {
      this.showCustomPopup = true;
    } else {
      alert('Please fill in the required fields: Name, Qualification, and Status.');
    }
  }
  
}
