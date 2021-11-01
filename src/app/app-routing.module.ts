import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './common/auth.guard';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'company', component: CompaniesComponent },
]
export const components = [HomeComponent, LoginComponent, CompaniesComponent];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export const appRoutingModule = RouterModule.forRoot(routes);
