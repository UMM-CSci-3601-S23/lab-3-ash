import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { UserListComponent } from './users/user-list.component';
import { UserProfileComponent } from './users/user-profile.component';


const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home'},
  {path: 'users', component: UserListComponent, title: 'Users'},
  {path: 'users/:id', component: UserProfileComponent, title: 'User Profile'},
  {path: 'todos', component: TodoListComponent, title: 'Users'},
  {path: 'todos/:id', component: UserProfileComponent, title: 'User Profile'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
