import { Component } from '@angular/core';
import { TodoService } from '../../core/services/todo.service';
import { Todo } from '../../models/todo.model';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todosList: Todo[] = [];
  loading = false;
  error = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
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

  remove(id: string): void {
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todosList = this.todosList.filter((t) => t.id !== id);
      },
      error: () => alert('Failed to delete todo'),
    });
  }
}
