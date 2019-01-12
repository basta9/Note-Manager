import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {

  constructor() { }

  getNotes() {
    if (localStorage.getItem('notes')) {
      return JSON.parse(localStorage.getItem('notes'))
    } else {
      let notes = this.createNotes()
      localStorage.setItem('notes', JSON.stringify(notes))
      return notes
    }
  }

  filterNotes(key) {
    key = key.toLowerCase()
    let notes = JSON.parse(localStorage.getItem('notes'))
    notes = notes.filter(note =>
      note.content.toLowerCase().includes(key) ||
      (note.todos.find(todo =>
        todo.text.toLowerCase().includes(key)) !== undefined))
    return notes
  }

  updateNote(note) {
    let notes = JSON.parse(localStorage.getItem('notes'))
    notes = notes.map(currNote => {
      if (note._id === currNote._id) return note
      return currNote
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    return notes
  }

  addNote(note) {
    note._id = this.makeId()
    let notes = JSON.parse(localStorage.getItem('notes'))
    notes.push(note)
    localStorage.setItem('notes', JSON.stringify(notes))
    return note
  }

  removeNote(id) {
    let notes = JSON.parse(localStorage.getItem('notes'))
    const idx = notes.findIndex(currNote => currNote._id === id)
    notes.splice(idx, 1)
    localStorage.setItem('notes', JSON.stringify(notes))
    return JSON.parse(JSON.stringify(notes))
  }

  createNotes() {
    return [
      {
        _id: this.makeId(),
        content: 'Feed the cat',
        todos: [{ text: 'do this', isDone: false }, { text: 'do that', isDone: true }],
        bgColor: 'green',
        txtColor: 'black',
        imgs: ['http://www.jurassicworld.com/sites/default/files/2018-06/960x540_0001_trex.png',
          'http://www.jurassicworld.com/sites/default/files/2018-06/960x540_0000_triceratops.png']
      },
      {
        _id: this.makeId(),
        content: 'Call Grandma',
        todos: [{ text: 'dont do this', isDone: true }, { text: 'say hello', isDone: true }],
        bgColor: 'red',
        txtColor: 'black',
        imgs: ['https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg']
      },
      {
        _id: this.makeId(),
        content: 'write JS',
        todos: [{ text: 'Clean house', isDone: false }, { text: 'do laundry', isDone: false }],
        bgColor: 'blue',
        txtColor: 'black',
        imgs: []
      },
    ]
  }

  makeId() {
    var length = 8;
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
  }
}
