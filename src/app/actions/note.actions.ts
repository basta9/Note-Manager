// import { Injectable,Inject } from '@angular/core'
import { Action } from '@ngrx/store'
import { Note } from './../models/note.model'

export const ADD_NOTE = '[NOTE] Add'
export const REMOVE_NOTE = '[NOTE] Remove'
export const LOAD_NOTE = '[NOTE] load'

export class AddNote implements Action {
    readonly type = ADD_NOTE
    constructor(public payload: Note) { }
}

export class RemoveNote implements Action {
    readonly type = REMOVE_NOTE
    constructor(public payload: number) { }
}

export class loadNotes implements Action {
    readonly type = LOAD_NOTE
    constructor( public payload: Note[]) { 
    }
}



export type Actions = AddNote | RemoveNote | loadNotes