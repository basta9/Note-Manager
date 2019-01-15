import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
// import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-note',
  template: `
    <div (click)="$event.stopPropagation(); openEditor()" class="note-container" [style.background-color]="getBg()" [style.color]="getTextColor()">
        <textarea name="content" [(ngModel)]="note.content" class="note-content" placeholder="Write Your Note..."></textarea>
        <app-todo-list (saveTodo)="saveNote($event.isAdding)" *ngIf="note.todos.length > 0" [todos]=note.todos [isEditing]="isEditing"></app-todo-list>
        <img *ngFor="let src of note.imgs" [src]="src" width="140">
        
        <!-- EDIT SECTION -->
        <section [ngClass]="(isEditing)? 'show' : 'hide'">
          <div class="editor-btns">
            <div class="color-picker">
              <input (click)="$event.stopPropagation();" name="color" [(ngModel)]="note.bgColor" type="color" title="Background Color">
              <img src="assets/color-picker.png" />
            </div>
            <div class="color-picker">
              <input (click)="$event.stopPropagation();" name="color" [(ngModel)]="note.txtColor" type="color" title="Text Color">
              <img src="assets/text-color.png" />
            </div>
            <img class="add-todo" src="assets/checklist.png" (click)="$event.stopPropagation(); addTodo()" title="Add To-do"/>
            <form
              class="publish-form"
              action
              method="POST"
              enctype="multipart/form-data"
              >
              <img src="assets/add-img.png"/>
              <input (input)="saveImg($event)" type="file" name="img" title="Add Image">
            </form>
          </div>
          <div class="change-btns">
            <div>
              <button (click)="$event.stopPropagation(); saveNote()">{{(note._id)? 'Save': 'Add'}}</button>
              <button (click)="$event.stopPropagation(); openCancel()">Cancel</button>
            </div>
            
            <button *ngIf="note._id" (click)="$event.stopPropagation(); remove.emit({ note: note })">Delete</button>
          </div>
        </section>
    </div>
  `,
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  isEditing = false
  cloudService

  @Output() save = new EventEmitter()
  @Output() remove = new EventEmitter()
  @Input() note = null


  constructor(@Inject('cloud') cloud) {
    this.cloudService = cloud
  }

  getBg() {
    return this.note.bgColor
  }

  openEditor() {
    this.isEditing = true;
  }

  getTextColor() {
    return this.note.txtColor
  }

  openCancel() {
    this.isEditing = false
    if (!this.note._id) {
      this.note = {
        content: '',
        todos: [],
        bgColor: '',
        txtColor: 'black',
        imgs: []
      }
    }
  }
  saveImg(ev) {
    ev.preventDefault();
    this.note.imgs.push('../../assets/loading.gif')
    this.cloudService.uploadImg(ev.path[1], ev).then(img => {
      this.note.imgs.pop()
      this.note.imgs.push(img.url)
    });
  }

  saveNote(isAdding = false) {
    this.save.emit({ note: this.note })
    this.isEditing = false
    if (!this.note._id && !isAdding) {
      this.note = {
        content: '',
        todos: [],
        bgColor: '',
        txtColor: 'black',
        imgs: []
      }
    }
  }

  addTodo() {
    this.note.todos.push({ text: '', isDone: false })
  }


  ngOnInit() {
    window.addEventListener('click', () => this.isEditing = false)
  }

}
