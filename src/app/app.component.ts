import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from "guid-typescript";
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [
    new Todo(Guid.create(),"learne TypeScript", false),
    new Todo(Guid.create(),"learne Angular", false),
  ];
  onSubmit(form: NgForm){
    let todo = new Todo(Guid.create(), form.value.newTask, false);
    this.todos.push(todo);
    form.resetForm();
  }
  onComplete(id: Guid){
    let todo = this.todos.filter(todo => todo.id === id)[0];
    todo.isCompleted = true;
  }
  onDelete(id: Guid){
    let todo = this.todos.filter(todo => todo.id === id)[0];
    let index = this.todos.indexOf(todo,0)
    if(index > -1){
      this.todos.splice(index,1)
    }
  }
}
