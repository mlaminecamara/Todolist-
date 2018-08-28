import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList = [''];
  @Input() newTodo: string;

  constructor() { }

  ngOnInit() {
  }

}
