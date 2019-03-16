import { Injectable } from '@angular/core';

//Http client For send and recieving requests
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class UserService {
//instantiating instances of the needed dependss
constructor(
    private http:HttpClient
  ) { }

  create(email:string ,password:string,fullName:string){
    const endpoint = '/api/v1/entrance/signup';
    return this.http
    .post(
        endpoint,
        {emailAddress:email,password:password,fullName:fullName},
    ).toPromise();
  
  } 
  
  
}
