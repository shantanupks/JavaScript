import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addTodo', component: AddtodoComponent },
  { path: 'viewTodo', component: ViewTodoComponent },
  { path: 'editTodo/:todoId', component: EditTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
