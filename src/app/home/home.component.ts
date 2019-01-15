import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="home-container">
    <h1>Welcome to Your Personal Note Manager</h1>
<pre>Write and edit your own personal notes. 
You can write reminders, checklists and even your grocery list. 
Your notes, Your desicion!</pre>
<img src="assets/about-img.png"/>
  </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
