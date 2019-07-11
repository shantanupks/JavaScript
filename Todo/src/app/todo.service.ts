import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todolist:any=[];
  todoStream:Subject<any> = new Subject();

  constructor(private _http:HttpClient,private router: Router) { }
  
  getTodoStream(){ 
    return this.todoStream;
  }

  getTodos(){
    return this.todolist
  }

  fetchTodoList(){
    let api="http://localhost:8282/api/v1/todos";
    this._http.get(api)
    .subscribe(e=>{
      this.todolist=e;
      this.publishToStream();
    })
  }

  addTodo(todo){
    console.log("addTodo()")
    let api="http://localhost:8282/api/v1/todos";
    return this._http.post(api,todo)
    .subscribe(e=>{
      this.fetchTodoList()
      this.router.navigate([''])
    })
  }
  completeAll(){
    let api="http://localhost:8282/api/v1/todos/completeAll"
    this._http.post(api,'hello')
    .subscribe(e=>{
      this.fetchTodoList()
    })
  }

  loadTodo(id){
    let api=`http://localhost:8282/api/v1/todos/${id}`
    return this._http.get(api)
  }

  completeTodo(todo){
    let id = todo.id;
    let api=`http://localhost:8282/api/v1/todos/${id}`;
    this._http.put(api,todo)
    .subscribe(e=>{
      this.fetchTodoList()
    })
  }

  removeTodo(todo){
    let id=todo.id;
    let api=`http://localhost:8282/api/v1/todos/${id}`;
    this._http.post(api,todo)
    .subscribe(e=>{
      this.fetchTodoList();
    })
  }

  publishToStream(){
    this.todoStream.next({todolist:this.todolist})
  }
}
