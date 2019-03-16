import { Component, OnInit } from '@angular/core';

//Router->for navigating after X(login)
//Activated Route-> refers to current routed (active one duh !)
import { Router, ActivatedRoute } from '@angular/router';


import { AuthService } from '../_services/auth.service';
import {AlertService} from '../_services/alert.service'

@Component({
  selector: 'app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
//Component Variales
  //The model object encapsulates data from the submitted form
    model:any={};
  //loading wheel by default is turned off (only on login btn click)
  loading=false;  
  //Url to go to after logging in
  returnUrl :string

//instantiating instances of the needed dependss
  constructor(
    private route :ActivatedRoute,
    private router :Router,
    private authenticationService:AuthService,
    private alertService:AlertService

  ) { 
// Type script takes care of intiatlizing class instances 
  }

  ngOnInit() {
  // reset login status
  this.authenticationService.logout();



  }

  login(){
this.loading=true;
this.authenticationService.login(this.model.email,this.model.password)
    .then(res=>{
      //Cookie is saved on a browser level for further requests
      localStorage.setItem('currentUser.name', res['fullname']);
   
      this.router.navigate(['/user/list']);
    })

    .catch(err=>{
      console.log(err)
    this.alertService.error('email or password are invalid !')
    this.loading=false
    

    })

  }
}
