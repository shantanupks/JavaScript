import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  editForm:FormGroup;

  constructor(private router:Router,
    private route:ActivatedRoute,
    private todoService:TodoService,
    private fb:FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe((e:any)=>{
      console.log(e.todoId)
      this.todoService.loadTodo(e.todoId)
      .subscribe(e=>{
        console.log("patching/....")
        this.editForm.patchValue(e);
      })
    })

    this.editForm = this.fb.group({
      id:[''],
      title: [''],
      body: [''],
      completed:['']
    });
  }

  handleSubmit(event) {
    console.log("handling Form()")
    let formData = this.editForm.value
    this.todoService.addTodo(formData)
  }

}
