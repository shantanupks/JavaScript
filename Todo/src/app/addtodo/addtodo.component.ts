import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  todoList: any = [];
  todoForm: FormGroup;


  constructor(private fb: FormBuilder, 
    private todoService: TodoService,
    ) { }

  handleFormSubmit() {
    let formData = this.todoForm.value
    this.todoService.addTodo(formData)
  }

  ngOnInit() {
    this.todoForm = this.fb.group({
      title: [''],
      body: ['']
    });
  }

}
