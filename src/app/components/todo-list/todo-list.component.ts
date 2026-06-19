import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  constructor(private todoService: TodoService) {}

  todosList: Todo[] = [];
  loading = false;
  error = '';

  ngOnInit() {
    this.loading = true;

    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todosList = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load todos';
        this.loading = false;
      },
    });
  }

  remove(id: string) {
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todosList = this.todosList.filter((t) => t.id !== id);
      },
      error: () => alert('Failed to delete todo'),
    });
  }

  // get todosList(): Todo[] {
  //   return this.todoService.getTodos();
  // }

  // remove(id: number): void {
  //   this.todoService.removeTodo(id);
  // }
}
