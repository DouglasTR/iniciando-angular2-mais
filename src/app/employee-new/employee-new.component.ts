import { Component, OnInit } from '@angular/core';
import employees from '../employees';
import {Employee, EmployeeService} from '../employee.service';
//Data Binding
@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employee:Employee = {
    name : '',
  salary : 0,
  bonus : 0
  }
  

  constructor(private employeeService: EmployeeService) { 
    //setTimeout(() => {
      //this.name = "DOuglas lindao";
    //}, 300);
  }

  ngOnInit() {
  }
  addEmployee(event){
    const copy = Object.assign({},this.employee);
    this.employeeService.addEmployee(copy);
  }
}
