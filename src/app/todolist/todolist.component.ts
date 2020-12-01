import { Task } from '../models/Tasks.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public todos: Task[]= [];


  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    this.todos.push(new Task())
  }

  modifyTask(index: number){
   // let el= this.todos.indexOf(new Task())
    this.todos.slice(index,index+1)
    //console.log(el)
  }

  removeTask(index: number){
    if(index>-1){
      this.todos.splice(index,1)
    }
    
  }

}
