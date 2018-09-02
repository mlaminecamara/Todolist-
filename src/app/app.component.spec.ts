import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms'; 


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoComponent
      ],
      imports:[FormsModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should check the todolist is set and empty', async(() =>{
    const fixture = TestBed.createComponent(TodoComponent);
    const todo = fixture.debugElement.componentInstance;

    expect(todo.todos).toEqual([]);

    expect(todo.todos).toBeNull

  }));

  it('should add a task in the todo list', async(() =>{
    const fixture = TestBed.createComponent(TodoComponent);
    const todo = fixture.debugElement.componentInstance;

    todo.newTodo = 'test';
    
    todo.onCreateTodo();
    
    expect(todo.todos[0]).toEqual({
      name: 'test',
      todoStatus: false
    });

  }));

  it('should delete a task from the todo list', async(() =>{
    const fixture = TestBed.createComponent(TodoComponent);
    const todo = fixture.debugElement.componentInstance;

    todo.newTodo = 'test';

    todo.onDeleteTodo('test', 0);

    expect(todo.todos[0]).toBeNull
  }));


});
