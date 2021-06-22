import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EmployeeServiceService } from './employee-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';

@NgModule({
  declarations: [AppComponent, ListEmployeesComponent, EditEmployeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
