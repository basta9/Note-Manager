import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  template: `
   <section class="note-manger-container">
    <app-note-add></app-note-add>
    <hr>
    <app-note-filter></app-note-filter>
    <app-note-list></app-note-list>
  </section>
  `,
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
