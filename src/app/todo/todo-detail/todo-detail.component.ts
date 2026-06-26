import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../core/services/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css',
})
export class TodoDetailComponent {
  todoId: string | null = null;
  editMode = false;
  todo?: Todo;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.todoId = params.get('id');

      if (this.todoId) {
        this.todoService.getTodoById(this.todoId).subscribe((todo) => {
          this.todo = todo;
          this.form = this.fb.group({
            title: [todo.title, [Validators.required, Validators.minLength(3)]],
            description: [todo.description],
            completed: [todo.completed],
          });
        });
      }
    });

    this.route.queryParamMap.subscribe((query) => {
      this.editMode = query.get('mode') === 'edit';
    });
  }

  save(): void {
    if (!this.todoId || this.form.invalid) return;

    const updated = new Todo(
      this.todoId,
      this.form.value.title,
      this.form.value.description,
      this.form.value.completed,
    );

    this.todoService.updateTodo(this.todoId, updated).subscribe({
      next: () => {
        this.editMode = false;
        this.todo = updated;
      },
      error: () => alert('Failed to update todo'),
    });
  }
}
