import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'https://jsonplaceholder.typicode.com/todos/';

  constructor(private http: HttpClient) {}

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/${id}`);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }
}
