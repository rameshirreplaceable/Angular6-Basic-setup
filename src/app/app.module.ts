import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesTlComponent } from './employees-tl/employees-tl.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeesTlComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
