import { Component, OnInit } from '@angular/core';
import { ListService } from '../_services/list.service';
import {AlertService} from'../_services/alert.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {


  toDoListArray: any[];
  constructor(private listService: ListService,
    private alertService:AlertService) { }

  ngOnInit() {

this.listService.getList()
  .then((res)=>{
    //intializing the list
    this.toDoListArray = [];
    
    // pushing incoming list into the class array
    for(let item of res['list']){
      let tmp={}
      tmp['text']=item['text']
      tmp['isChecked']=item['isChecked']
      tmp['id']=item['id']
      this.toDoListArray.push(tmp)
    }

    // Sorting the array on the isChecked flag
    this.toDoListArray.sort((a,b) => {
      return a.isChecked - b.isChecked;
    })

  })
  .catch((err)=>{
    //An error occured while fetching the list
      this.alertService.error(err['message'])
  })

  }

  onAdd(newTask) {// post add task
    this.listService.addTask(newTask.value)
    .then((res)=>{
      //notify user 
      this.alertService.success(res['message'])

      //Extract task details from json
      res=res['newTask']

      //Create a new task object
      let tmp={}
      tmp['text']=res['text']
      tmp['isChecked']=res['isChecked']
      tmp['id']=res['id']

      //Push it back in the class array i.e the list
      this.toDoListArray.push(tmp)

      //Clean the text box 
      newTask.value = null;

      //Clear alert
      setTimeout(()=>{this.alertService.clearAlert()},1000);
    })
    .catch((err)=>{
      //Something wrong happened.
      this.alertService.error(err['message'])
    })
   
  }

  alterCheck(taskId:string) {
    this.listService.toggleCheked(taskId)
      .then((res)=>{
      //Toggle the isChecked flag of the targeted task 
      for (let task of this.toDoListArray){
        if(task.id===res['updatedTaskId']){
          task.isChecked=!task.isChecked
        }
      }
    })
    .catch((error)=>{
      //Something wrong happened
      this.alertService.error(error['message'])
    })
  }

  onDelete(taskId : string){
    this.listService.deleteTask(taskId)
    .then((res)=>{
      //Notify user 
      this.alertService.success(res['message'])
      //Filter the list from the delted task
      this.toDoListArray=this.toDoListArray.filter((item)=>{
           return(item.id!=res['deletedTaskId'])
      })
      //Clear alert
      setTimeout(()=>{this.alertService.clearAlert()},1000);
    })
    .catch((error)=>{
      //Something wrong happened
      this.alertService.error(error['message'])
    })

  }

}