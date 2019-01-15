import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="home-container">
    <h1>This is Your Personal Note Manager!</h1>
      <div>
        This manager enables you to write and edit your own notes. 
        It uses Angular latest version with NGRX to create a smooth user experience, 
        with best practice code.  
        Try it for Yourself!
      </div>
    <img routerLink="manager" src="assets/about-img.png"/>
  </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
