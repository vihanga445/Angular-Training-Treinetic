import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css',
})
export class TodoDetailComponent {
  todoId: string | null = '';
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
            title: [
              this.todo?.title,
              [Validators.required, Validators.minLength(3)],
            ],
            description: [this.todo?.description],
            completed: [this.todo?.completed],
          });
        });
      }
    });

    this.route.queryParamMap.subscribe((queryParams) => {
      this.editMode = queryParams.get('mode') === 'edit';
    });
  }

  save(): void {
    if (!this.todoId || this.form.invalid) return;

    const updated: Todo = {
      id: this.todoId,
      ...this.form.value,
    };

    this.todoService.updateTodo(this.todoId, updated).subscribe({
      next: () => {
        this.editMode = false;
        this.todo = updated;
      },
      error: () => alert('Failed to update todo'),
    });
  }
}
