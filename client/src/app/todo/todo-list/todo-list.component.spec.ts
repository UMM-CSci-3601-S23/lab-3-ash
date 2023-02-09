import { ComponentFixture, TestBed, waitForAsync  } from '@angular/core/testing';
import { TodoCardComponent } from '../todo-card/todo-card.component';
import { TodoListComponent } from './todo-list.component';
import { MockTodoService } from '../../../testing/todo.service.mock';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const COMMON_IMPORTS: any[] = [
MatSnackBarModule
];

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  // Set up the `TestBed` so that it uses
  // a `MockUserService` in place of the real `UserService`
  // for the purposes of the testing. We also have to include
  // the relevant imports and declarations so that the tests
  // can find all the necessary parts.
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [COMMON_IMPORTS],
      declarations: [TodoListComponent, TodoCardComponent],
      // providers:    [ UserService ]  // NO! Don't provide the real service!
      // Provide a test-double instead
      // This MockerUserService is defined in client/testing/user.service.mock.
      providers: [{ provide: TodoService, useValue: new MockTodoService() }]
    });
  });

  // This constructs the `userList` (declared
  // above) that will be used throughout the tests.
  beforeEach(waitForAsync(() => {
    // Compile all the components in the test bed
    // so that everything's ready to go.
    TestBed.compileComponents().then(() => {
      /* Create a fixture of the UserListComponent. That
      * allows us to get an instance of the component
      * (userList, below) that we can control in
      * the tests.
      */
      fixture = TestBed.createComponent(TodoListComponent);
      component = fixture.componentInstance;
      /* Tells Angular to sync the data bindings between
      * the model and the DOM. This ensures, e.g., that the
      * `userList` component actually requests the list
      * of users from the `MockUserService` so that it's
      * up to date before we start running tests on it.
      */
      fixture.detectChanges();
    });
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
