import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl} from '@angular/forms';
import { Router,ActivatedRoute, Routes } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from 'src/app/employee-service.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public employees: Employee[]=[];
  public new_emp: Employee = new Employee;


  constructor(private router:ActivatedRoute,
    private formBuilder: FormBuilder,
    private _employeeservice:EmployeeServiceService,
    private routernav:Router,
    private toastr: ToastrService) {
  } 
  editform = this.formBuilder.group({
    firstname: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
   salary: new FormControl(''),
   });

  ngOnInit(): void {
    this.employees=this._employeeservice.employees; 
    
    var x :number = +this.router.snapshot.params.id;
    const emp = this.employees.find(o => o.ID === x);  
     this.editform = this.formBuilder.group({
      firstname: new FormControl(emp?.FirstName),
      email: new FormControl(emp?.Email),
      gender: new FormControl(emp?.Gender),
     salary: new FormControl(emp?.Salary),
     });
  }
  save(data:any){
    var x :number = +this.router.snapshot.params.id;
    const index = this._employeeservice.employees.findIndex(z => z.ID ===x);

    // console.log(x);
    // console.log(5445)
    this.new_emp.ID=x;
    this.new_emp.FirstName=data.firstname;
     this.new_emp.Email=data.email;
     this.new_emp.Gender=data.gender;
    var y :number =+data.salary;
     this.new_emp.Salary=y;
     console.log(this._employeeservice.employees[index])
this._employeeservice.employees[index]=this.new_emp;
console.log(this._employeeservice.employees[index])
this.toastr.warning('Row Updated successfully', 'Update row', {
  timeOut: 1000,
});
   this.routernav.navigateByUrl('/list');
  }

}
