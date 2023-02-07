import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  public serverFilteredTodos: Todo[];
  public filteredTodos: Todo[];

  public completed: boolean;

  /**
   * This constructor injects both an instance of `TodoService`
   * and an instance of `MatSnackBar` into this component.
   *
   * @param todoService the `TodoService` used to get users from the server
   * @param snackBar the `MatSnackBar` used to display feedback
   */
  constructor(private todoService: TodoService, private snackBar: MatSnackBar) {
    // Nothing here – everything is in the injection parameters.
  }

  /**
   * Get the todos from the server, filtered by the role and age specified
   * in the GUI.
   */
  getTodosFromServer() {
    this.todoService.getTodos({
      completed: this.completed
    }).subscribe(returnedTodos => {
      // This inner function passed to `subscribe` will be called
      // when the `Observable` returned by `getUsers()` has one
      // or more values to return. `returnedUsers` will be the
      // name for the array of `Users` we got back from the
      // server.
      this.serverFilteredTodos = returnedTodos;
      this.updateFilter();
    }, err => {
      // If there was an error getting the users, log
      // the problem and display a message.
      console.error('We couldn\'t get the list of todos; the server might be down');
      this.snackBar.open(
        'Problem contacting the server – try again',
        'OK',
        // The message will disappear after 3 seconds.
        { duration: 3000 });
    });
  }

  /**
   * Called when the filtering information is changed in the GUI so we can
   * get an updated list of `filteredUsers`.
   */
  public updateFilter() {
    this.filteredTodos = this.serverFilteredTodos;
  }

  /**
   * Starts an asynchronous operation to update the users list
   */
  ngOnInit(): void {
    this.getTodosFromServer();
  }
}
