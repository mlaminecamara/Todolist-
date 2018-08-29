import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  allowTodoCreation = false;
  todoStatus = false;
  
  todoCreationStatus = 'No todo created';
  nextId: number;
  todos = [];

  newTodo = '';

  constructor() { 
    setTimeout(() => {
      this.allowTodoCreation = true;
    }, 2000);
    let todos = this.getTodos();

    if(todos.length == 0){
      this.nextId = 0;
    }
    else{
      let maxId = todos[todos.length -1];
      this.nextId = maxId +1;
    }
  
  }

  ngOnInit() {
  }

  onCreateTodo(){
    var tab = 
      {
        Id: this.nextId,
        todoStatus: false,
        name: this.newTodo
      }
      let todos = this.getTodos();
            
      todos.push(tab);

      console.log(todos);

      this.setLocalStorageTodos(todos);

      this.newTodo =''
      this.nextId++;
}

 
  onDeleteTodo(todo,i){
    this.todos.splice(i,1);
    
  }

  deleteSelected(){
      this.todos = this.todos.filter((todo)=> !todo.todoStatus);
    }

  getTodos(){
    let localStorageItem = JSON.parse[localStorage.getItem('todos')];
    return localStorageItem == null ? [] : localStorageItem;
  }

  setLocalStorageTodos(todos){
    localStorage.setItem('todos',JSON.stringify({todo: todos}));
  }

}

