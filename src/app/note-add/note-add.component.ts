import { Component, OnInit, Inject } from '@angular/core';
import { ADD_NOTE, REMOVE_NOTE, LOAD_NOTE } from '../actions/note.actions'
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-note-add',
  template: `
    <section class="add-note-container">
      Add a Note!
      <app-note
      (save)="addNote($event.note)" 
      [note]="note"
      ></app-note>
    </section>
  `,
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {

  note = {
    content: '',
    todos: [],
    bgColor: '',
    txtColor: 'black',
    imgs: []
  }

  noteService
  add: Function

  constructor(@Inject('note') note, private store: Store<AppState>) {
    this.noteService = note
  }

  ngOnInit() {
  }

  addNote(note) {
    const newNote = this.noteService.addNote(JSON.parse(JSON.stringify(note)))
    this.store.dispatch({ type: ADD_NOTE, payload: newNote })
  }
}
