import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Importing Components
import {LoginComponent}from './login/login.component';
import {RegisterComponent}from './register/register.component';
import {ListComponent}from'./list/list.component';

import{AuthGuardService} from './_services/auth-guard.service'

//To-Add route guard.

//Constructing Paths
const routes: Routes = [
{path:'',component:LoginComponent,canActivate:[AuthGuardService]},
{path:'user/login',component:LoginComponent},
{path:'user/register',component:RegisterComponent},
{path:':user/list',component:ListComponent,},

//Redirect to home upon any other route
{path:'*',redirectTo:'user/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
