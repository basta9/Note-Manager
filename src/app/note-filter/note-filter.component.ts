import { Component, OnInit, Inject } from '@angular/core';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { ADD_NOTE, REMOVE_NOTE, LOAD_NOTE } from '../actions/note.actions'

@Component({
  selector: 'app-note-filter',
  template: `
  <div class="note-filter">
    <input (input)="setFilter()" [(ngModel)]="searchKey" placeholder="Search For a Note"> 
  </div>
  `,
  styleUrls: ['./note-filter.component.scss']
})
export class NoteFilterComponent implements OnInit {

  noteService
  searchKey: string

  constructor(@Inject('note') note, private store: Store<AppState>) {
    this.noteService = note
  }

  setFilter() {
    const filterd = this.noteService.filterNotes(this.searchKey)
    this.store.dispatch({ type: LOAD_NOTE, payload: filterd })
  }

  ngOnInit() {
  }

}
