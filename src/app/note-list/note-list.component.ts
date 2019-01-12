import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Note } from './../models/note.model';
import { ADD_NOTE, REMOVE_NOTE, LOAD_NOTE } from '../actions/note.actions'
import { AppState } from './../app.state';


@Component({
  selector: 'app-note-list',
  template: `
  <section class="note-list-container">
    <app-note 
    *ngFor="let note of notes$ | async"
    (save)="updateNote($event.note)" 
    (remove)="removeNote($event.note)" 
    [note]="note"></app-note>
  </section>
  `,
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  notes$: Observable<Note[]>
  noteService

  constructor(@Inject('note') note, private store: Store<AppState>) {
    this.noteService = note
    this.notes$ = store.select('notes');
  }

  removeNote(note) {
    console.log('REMOVE', note);
    const updatedNotes = this.noteService.removeNote(note._id)
    this.store.dispatch({ type: LOAD_NOTE, payload: updatedNotes })
  }
  updateNote(note) {
    const updatedNotes = this.noteService.updateNote(note)
    this.store.dispatch({ type: LOAD_NOTE, payload: updatedNotes })
  }

  ngOnInit() {
    let lodedNotes: Note[]
    lodedNotes = this.noteService.getNotes()
    this.store.dispatch({ type: LOAD_NOTE, payload: lodedNotes })
  }

}
