import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './Authguard/authentication.guard';

import { ArchieveComponent } from './Component/archieve/archieve.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { GetAllNotesComponent } from './Component/get-all-notes/get-all-notes.component';
import { LoginComponent } from './Component/login/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { TrashComponent } from './Component/trash/trash.component';




const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'ForgotPassword',component:ForgotPasswordComponent},
  {path:'reset-password/:token',component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:'', redirectTo:'/dashboard/notes', pathMatch:'full' },
    {path:'notes',component:GetAllNotesComponent},
    {path:'archieve',component: ArchieveComponent},
    {path:'trash',component: TrashComponent},
  ]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }