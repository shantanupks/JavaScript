import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.css']
})
export class ViewTodoComponent implements OnInit {

  todos: any = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.fetchTodoList();

    this.todoService.getTodoStream()
      .subscribe((response: any) => {
        this.todos = response.todolist;
      })
  }

  // ngDoCheck() {
  //   console.log("ngOnCheck");
  //   this.todos = this.todoService.getTodos();
  // }

  completeTodo(todo) {
    this.todoService.completeTodo(todo)
  }
  completeAll(){
    this.todoService.completeAll()
  }
  deleteTodo(todo) {
    this.todoService.removeTodo(todo)
  }
  editTodo(todo){
    
  }

}
