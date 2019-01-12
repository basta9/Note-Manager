import { Action } from '@ngrx/store'
import { Note, initialState } from './../models/note.model'
import * as NoteActions from './../actions/note.actions'
import { NoteService } from '../note.service';


export function noteReducer(state = initialState.notes, action: NoteActions.Actions) {

    switch (action.type) {
        case NoteActions.ADD_NOTE:
            // return [...state];
            // debugger
            return [...state, action.payload];
        case NoteActions.REMOVE_NOTE:
            return state.splice(action.payload, 1);
        case NoteActions.LOAD_NOTE:
            state = action.payload;
            return state;
        default:
            return state;
    }
}