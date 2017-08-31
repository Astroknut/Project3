import { Component } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    meta: Meta, 
    title: Title
  ) {
  	title.setTitle('Anima');

  	meta.addTags([
  	  { name: 'author',   content: 'The best Squad'},
  	  { name: 'keywords', content: 'Journal, anima'},
  	  { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
  	]);
  }
}