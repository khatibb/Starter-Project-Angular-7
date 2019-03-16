import { Injectable } from '@angular/core';

//Http client For send and recieving requests
import { HttpClient } from '@angular/common/http';
//import { CookieService } from 'ngx-cookie-service';

const endpoint = '/api/v1/entrance/login';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
//instantiating instances of the needed dependss
constructor(
    private http:HttpClient,
   //private cookieService:CookieService
  ) { }


login(email:string ,password:string){
  console.log('email:'+email+' password :'+password)
  return this.http
  .put(
      endpoint,
      {emailAddress:email,password:password,rememberMe:true},
  ).toPromise();

} 

logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  // Delet his cookie
  //this.cookieService.delete('sails.sid');
}


}
