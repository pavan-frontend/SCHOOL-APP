import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,children:[
    {path:"Home",component:HomeComponent},
    {path:"CreateStudent",component:CreatestudentComponent},
    {path:"Allstudents",component:AllstudentsComponent}
  ]},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
 
