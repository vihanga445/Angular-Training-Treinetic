import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodoListComponent, canActivate: [authGuard] },
  { path: 'add-todo', component: TodoAddComponent, canActivate: [authGuard] },
  {
    path: 'todos/:id',
    component: TodoDetailComponent,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '/todos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
