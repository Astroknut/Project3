import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-new-journal',
  templateUrl: './new-journal.component.html',
  styleUrls: ['./new-journal.component.css'],
  providers: [JournalService]
})
export class NewJournalComponent implements OnInit {

  journal;
  
  setColor(color) {
  	this.journal.color = color;
  }

  createJournal() {
  	if(this.journal.name === "") {
  		this.journal.invalid = true;
  	} else {
  		this.journal.invalid = false;
      let that = this;
      this.journalService.addJournal(this.journal)
        .subscribe(result => {
          that.router.navigate(['../journal/', result.json().id, 'new-entry']);
        });
  	}
  }

  constructor(
  	public router: Router,
    private journalService: JournalService
  ) { }

  ngOnInit() {

  	this.journal = {
  		name: "",
  		color: "white",
      selected: false,
      moving_left: false,
      moving_right: false,
  		invalid: false,
      entries: []
  	}
  }

}
