import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todo!: Todo;
  todos!: Todo[];

  constructor(public service: TodoService) {}

  ngOnInit() {
    this.service.getTodo(1).subscribe((todo) => {
      this.todo = todo;
    });
    this.service.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  // Otra forma (sin suscripción)
  todos$!: Observable<Todo[]>;
  ngOnInit2() {
    this.todos$ = this.service.getTodos();
  }
}
