import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService  {

  constructor(private http:HttpClient) { }


 //Credentials are took from the cookie on the browser level hence


 //Create a new task
addTask(taskDescription:string){
 const endpoint='/api/v1/list';
  return this.http
  .post(
      endpoint,
      {task:taskDescription }, 
      {withCredentials:true}
  ).toPromise();

} 
//Fetch list
getList(){
  const endpoint ='/api/v1/list'
  return this.http
  .get(
      endpoint,
      {withCredentials:true}
  ).toPromise();

} 

// Mark a task as checked
toggleCheked(taskId:string) {
  const endpoint ='/api/v1/list/'+taskId
  return this.http
  .put(
      endpoint,
      {withCredentials:true}
  ).toPromise()

  }

//Delete a task
deleteTask(taskId:string) {
  const endpoint ='/api/v1/list/'+taskId
  return this.http
  .delete(
      endpoint,
      {withCredentials:true}
  ).toPromise()

  }

}
