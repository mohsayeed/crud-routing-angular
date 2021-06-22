import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  employees: Employee[] = [
    {
      ID: 1,
      FirstName: 'Sayeed',
      Email: 'sayeed@xit.com',
      Gender: 'Male',
      Salary: 0,

    },
    {
      ID: 2,
      FirstName: 'Sayeed',
      Email: 'sayeed@xit.com',
      Gender: 'Male',
      Salary: 0,

    },
    {
      ID: 3,
      FirstName: 'Sayeed',
      Email: 'sayeed@xit.com',
      Gender: 'Male',
      Salary: 0,

    },
    {
      ID: 4,
      FirstName: 'Sayeed',
      Email: 'sayeed@xit.com',
      Gender: 'Male',
      Salary: 0,

    },
  ];
  constructor() {  }
  getEmployees(){
    return this.employees;
  }
  getCurrentData(id:number){
    let item1 = this.employees.find(i => i.ID === 1);
  }
}
