import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  headers = ["ID", "FirstName", "Email", "Gender", "Salary","Actions"];
public employees: Employee[]=[];

  constructor(private toastr: ToastrService, private router: Router,private _employeeservice:EmployeeServiceService) {}

  ngOnInit(){
    this.employees=this._employeeservice.employees;
  }

  deleteRow(index:number) {
     {   if (confirm('Are you sure to delete this record ?')){
        this._employeeservice.employees.splice(index, 1);
        this.toastr.warning('Row deleted successfully', 'Delete row', {
          timeOut: 1000,
        });
      }
        return true;
    }
}
}
