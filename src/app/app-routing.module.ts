import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';


const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'edit/:id', component: EditEmployeeComponent },
  { path: '', redirectTo: '/list',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
