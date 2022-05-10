import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ForgotPasswordComponent } from './ForgotPassword/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './ResetPassword/reset-password/reset-password.component';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'ForgotPassword',component:ForgotPasswordComponent},
  {path:'ResetPassword',component:ResetPasswordComponent},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
