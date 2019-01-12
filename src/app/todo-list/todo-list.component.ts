import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul class="todo-list">
      To-do List:
      <li *ngFor="let todo of todos; let i = index" class="todo-container">
        <input (click)="$event.stopPropagation(); setCheckbox()" name="checkbox" class="todo-checkbox" type="checkbox" [(ngModel)]="todo.isDone">
        <input  name="todo-text" #text class="todo-text" type="text" [(ngModel)]="todo.text">
        <button *ngIf="isEditing" (click)="removeTodo(i)">X</button>
        <!-- {{last}} -->
      </li>
    </ul>
  `,
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos
  @Input() isEditing
  @Output() saveTodo = new EventEmitter()

  constructor() { }

  removeTodo(idx) {
    this.todos.splice(idx, 1)
    this.saveTodo.emit({ isAdding: true })
  }

  setCheckbox() {
    setTimeout(() => this.saveTodo.emit(), 5)
  }

  ngOnInit() {
  }


}
