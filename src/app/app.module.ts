import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NoteService } from './note.service';
import { CloudinaryService } from './cloudinary.service';
import { NoteAddComponent } from './note-add/note-add.component';
import { StoreModule } from '@ngrx/store';
import { noteReducer } from './reducers/notes.reducer';
import { ManagerComponent } from './manager/manager.component';
import { NoteFilterComponent } from './note-filter/note-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NoteComponent,
    NoteListComponent,
    TodoListComponent,
    NoteAddComponent,
    ManagerComponent,
    NoteFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      notes: noteReducer,
    })
  ],
  providers: [{ provide: 'note', useClass: NoteService },
  { provide: 'cloud', useClass: CloudinaryService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
