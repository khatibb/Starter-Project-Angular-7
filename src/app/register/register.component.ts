import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../_services/user.service'
import {AlertService} from '../_services/alert.service'
@Component({
 
  templateUrl: './register.component.html',
})
export class RegisterComponent {
model:any = {};
loading =false;

  constructor(
 private router:Router,
 private userService:UserService,
 private alertService:AlertService

  ) { }

  register(){
    this.loading=true;
    this.userService.create(this.model.email,this.model.password,this.model.fullname)
    .then(res=>{
      if(res){
        //Alert him registiration succesful
        this.alertService.success(res['message']);
        //this.router.navigate(['user/list']);
      }
    })

    .catch(error=>{
        this.alertService.error("Email already in use !");
        this.loading=false;
    })
      }



}
