import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { authGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: TodoListComponent, canActivate: [authGuard] },
  { path: 'add', component: TodoAddComponent, canActivate: [authGuard] },
  { path: ':id', component: TodoDetailComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
