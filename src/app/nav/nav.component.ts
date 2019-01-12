import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <section class="nav-container">
      <header>
        <div routerLink="manager" class="Logo" >
          <img src="../../assets/notes-logo.png" />
          Note Manager
        </div>
        <nav>
          <a routerLink="">About</a> |
          <a routerLink="manager">Notes</a>
        </nav>
      </header>
    </section>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
