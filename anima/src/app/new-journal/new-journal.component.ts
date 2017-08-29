import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-journal',
  templateUrl: './new-journal.component.html',
  styleUrls: ['./new-journal.component.css']
})
export class NewJournalComponent implements OnInit {

  journal;
  
  setColor(color) {
  	console.log('hi');
  	this.journal.color = color;
  }

  createJournal() {
  	// TO DO - Save to the backend

  	if(this.journal.name === "") {
  		this.journal.invalid = true;
  	} else {
  		this.journal.invalid = false;
  		this.router.navigate(['../journal/', this.journal.id, 'new-entry']);
  	}
  }

  constructor(
  	public router: Router
  ) { }

  ngOnInit() {
  	this.journal = {
  		id: 7,
  		name: "",
  		color: "white",
  		invalid: false
  	}
  }

}
