import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../app/todo/todo';
import { TodoService } from '../app/todo/todo.service';

/**
 * A "mock" version of the `UserService` that can be used to test components
 * without having to create an actual service. It needs to be `Injectable` since
 * that's how services are typically provided to components.
 */
@Injectable()
export class MockTodoService extends TodoService {
  static testUsers: Todo[] = [
    {
    "_id": "58895985a22c04e761776d54",
    "owner": "Blanche",
    "status": false,
    "body": "In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.",
    "category": "software design"
  },
  {
    "_id": "58895985c1849992336c219b",
    "owner": "Fry",
    "status": false,
    "body": "Ipsum esse est ullamco magna tempor anim laborum non officia deserunt veniam commodo. Aute minim incididunt ex commodo.",
    "category": "video games"
  },
  {
    "_id": "58895985ae3b752b124e7663",
    "owner": "Fry",
    "status": true,
    "body": "Ullamco irure laborum magna dolor non. Anim occaecat adipisicing cillum eu magna in.",
    "category": "homework"
  }
  ];

  constructor() {
    super(null);
  }

  getTodos(filters: { completed?: boolean }): Observable<Todo[]> {
    // Our goal here isn't to test (and thus rewrite) the service, so we'll
    // keep it simple and just return the test users regardless of what
    // filters are passed in.
    //
    // The `of()` function converts a regular object or value into an
    // `Observable` of that object or value.
    return of(MockTodoService.testUsers);
  }

}
