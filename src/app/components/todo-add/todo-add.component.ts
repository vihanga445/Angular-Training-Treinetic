import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../models/todo.model';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
  private fb: FormBuilder = new FormBuilder();

  form!: FormGroup;

  constructor(
    private readonly todoService: TodoService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      completed: [false],
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const todo = new Todo(
      '',
      this.form.value.title,
      this.form.value.description,
      this.form.value.completed,
    );

    this.todoService.addTodo(todo).subscribe({
      next: () => {
        this.form.reset();
        this.router.navigate(['/todos']);
      },
      error: () => alert('Failed to create todo'),
    });
  }

  // submit(): void {
  //   if (this.form.invalid) {
  //     this.form.markAllAsTouched();
  //     return;
  //   }

  //   const todo: Todo = {
  //     id: 0,
  //     ...this.form.value,
  //   };

  //   this.todoService.addTodo(todo);
  //   this.form.reset();
  //   this.router.navigate(['/todos']);
  // }
}
