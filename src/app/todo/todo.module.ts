import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoAddComponent,
  ],
  imports: [CommonModule, TodoRoutingModule, ReactiveFormsModule, FormsModule],
})
export class TodoModule {}
