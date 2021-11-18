import { Component } from '@angular/core';
import { EmployeeDataService } from '../services/employee-data.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee.component.html',
  styleUrls:['./employee.component.scss']
})
export class EmployeeComponent {

  constructor(private readonly employeeDataService: EmployeeDataService) { }

  employeeName: string;
  fetchedEmployeeName: string;

  getEmplyeeName() {
    this.employeeDataService.getEmployeeName(this.employeeName).subscribe((res) => {
      this.fetchedEmployeeName = res;
      console.log(res);
      } 
    );
  }
  
}
