export class EmployeeModel {
    name: string = '';
    designation: string = '';
    joiningDate: Date | string = ''; // You can use either a Date or a string for joining date
    projectType: string = '';
    qualification: string = '';
    isActive: boolean = false; // Use boolean for isActive
    salaryLatest: number;
  
    constructor(argSalary: number) {
      this.salaryLatest = argSalary;
    }
}
  