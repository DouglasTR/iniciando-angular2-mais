import { Component, OnInit } from '@angular/core';
import  employees from '../employees';
@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = employees;
  constructor() { }

  ngOnInit() {
  }
  getSalaryColor(employee){
    return employee.salary > 20000? 'green':'null';
  }
}