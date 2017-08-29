import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-entry',
  templateUrl: './show-entry.component.html',
  styleUrls: ['./show-entry.component.css']
})
export class ShowEntryComponent implements OnInit {

  entry = {
  	date: "8/26/17",
  	text: "Donald Trump showed up at my house and I punched him right in the kisser."
  }

  constructor() { }

  ngOnInit() {
  }

}
