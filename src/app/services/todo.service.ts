import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private api = 'https://6a3121377bc5e1c612653b42.mockapi.io/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<any[]>(this.api)
      .pipe(
        map((list) =>
          list.map(
            (item) =>
              new Todo(item.id, item.title, item.description, item.completed),
          ),
        ),
      );
  }

  getTodoById(id: string): Observable<Todo> {
    return this.http
      .get<any>(`${this.api}/${id}`)
      .pipe(
        map(
          (item) =>
            new Todo(item.id, item.title, item.description, item.completed),
        ),
      );
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post<any>(this.api, todo)
      .pipe(
        map(
          (item) =>
            new Todo(item.id, item.title, item.description, item.completed),
        ),
      );
  }

  updateTodo(id: string, todo: Todo): Observable<Todo> {
    return this.http
      .put<any>(`${this.api}/${id}`, todo)
      .pipe(
        map(
          (item) =>
            new Todo(item.id, item.title, item.description, item.completed),
        ),
      );
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
