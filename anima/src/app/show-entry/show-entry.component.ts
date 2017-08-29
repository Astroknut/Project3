import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-entry',
  templateUrl: './show-entry.component.html',
  styleUrls: ['./show-entry.component.css']
})
export class ShowEntryComponent implements OnInit {

  editing = false;
  oldText = "";

  entry = {
  	date: "8/26/17",
  	text: "Donald Trump showed up at my house and I punched him right in the kisser."
  }

  editEntry() {
  	this.editing = true;
  	this.oldText = this.entry.text;
  }

  saveEntry() {
  	this.editing = false;
  }

  cancelEdit() {
  	this.editing = false;
  	this.entry.text = this.oldText;
  }

  constructor() { }

  ngOnInit() {
  }

}
