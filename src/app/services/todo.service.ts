import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private api = 'https://6a3121377bc5e1c612653b42.mockapi.io/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.api);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.api, todo);
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

  // private currentId = 0;
  // private todos: Todo[] = [];

  // getTodos(): Todo[] {
  //   return [...this.todos];
  // }

  // addTodo(todo: Todo): void {
  //   todo.id = ++this.currentId;
  //   this.todos.push(todo);
  // }

  // removeTodo(id: number): void {
  //   const index = this.todos.findIndex((t) => t.id === id);
  //   if (index !== -1) {
  //     this.todos.splice(index, 1);
  //   }
  // }
}
