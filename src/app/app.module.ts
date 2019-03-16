import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

//ROUTER + Main component to bootstrap
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Http library for receiving and sending http reqs
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Components
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_directives/alert/alert.component'

//Services to be used by components
import {AuthService} from'./_services/auth.service';
import {AlertService} from './_services/alert.service';
import {ListService } from'./_services/list.service';
 
@NgModule({
  declarations: [//declaring children componenets 
    AppComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [ //Modules this module -depends on 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [   // list of services that gonna be used to provide data to the componenets 
    AuthService,
    AlertService,
    ListService
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
