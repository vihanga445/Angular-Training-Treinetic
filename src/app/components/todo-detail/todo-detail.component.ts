import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css',
})
export class TodoDetailComponent {
  todoId: string | null = '';
  editMode = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.todoId = params.get('id');
    });

    this.route.queryParamMap.subscribe((queryParams) => {
      this.editMode = queryParams.get('mode') === 'edit';
    });
  }
}
