import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from 'src/app/employees/employees.component';
import { AuthguardService } from './authentication/authguard.service';
import { LoginComponent } from 'src/app/common/login/login.component';
import { RegisterComponent } from 'src/app/common/register/register.component';
import { EmployeesTlComponent } from 'src/app/employees-tl/employees-tl.component';

const routes: Routes = [
    {path: '', component: EmployeesComponent, canActivate:[AuthguardService]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'employee', component: EmployeesComponent, canActivate:[AuthguardService]},
    {path: 'teamleader', component: EmployeesTlComponent, canActivate:[AuthguardService]},
    {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
