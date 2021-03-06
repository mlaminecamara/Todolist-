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
  todos = [];
  newTodo = '';

  constructor() { 
    setTimeout(() => {
      this.allowTodoCreation = true;
    }, 2000);
  
  }

  ngOnInit() {

    this.onreadTodo();
    
  }

  onreadTodo(){
    this.todos= JSON.parse(localStorage.getItem('todos'));
    if(!this.todos){
      this.todos = [];
    }

  }

  onCreateTodo(){
    var tab = 
      {
        todoStatus: false,
        name: this.newTodo
      }
      
      this.todos.push(tab);

      localStorage.setItem('todos', JSON.stringify(this.todos));
      
      this.newTodo =''
}


 
  onDeleteTodo(todo,i){
    this.todos.splice(i,1);
    localStorage.setItem('todos', JSON.stringify(this.todos));

  }

  deleteSelected(){
      this.todos = this.todos.filter((todo)=> !todo.todoStatus);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }

}

