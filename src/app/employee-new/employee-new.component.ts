import { Component, OnInit } from '@angular/core';
import employees from '../employees';
//Data Binding
@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = '';
  salary = 0;
  employees = employees;
  constructor() { 
    setTimeout(() => {
      this.name = "DOuglas lindao";
    }, 300);
  }

  ngOnInit() {
  }
  addEmployee(event){
    console.log(event);
    this.employees.push({name:this.name, salary: this.salary});
    console.log(this.employees);
  }
}
