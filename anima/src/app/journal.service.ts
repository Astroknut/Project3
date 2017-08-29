import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JournalService {

  journals = [
    {
      id: 1,
      name: 'Daily Journal',
      color: 'blue',
      selected: true,
      moving_left: false,
      moving_right: false,
      invalid: false,
      entries: [
      	{
  			id: 1,
  			date: "8/26/17",
  			text: "Today I ate a spider.  Donald Trump showed up at my door and I punched him right in the kisser.  What a fuck.",
  			blurb: ""
  		},
  		{
  			id: 2,
  			date: "8/27/17",
  			text: "Scooby Doo.  Donald Trump showed up at my door and I punched him right in the kisser.  What a fuck.",
  			blurb: ""
  		},
  		{
  			id: 3,
  			date: "8/28/17",
  			text: "ayayayaya.  Donald Trump showed up at my door and I punched him right in the kisser.  What a fuck.",
  			blurb: ""
  		}
      ]
    },
    {
      id: 2,
      name: 'Creative Writing',
      color: 'red',
      selected: false,
      moving_left: false,
      moving_right: false,
      entries: []
    }
  ];

  journal(id, callback) {
  	this.journals.forEach(element => {
  		if(element.id === parseInt(id)) {
  			callback(element);
  		}
  	});
  }

  entry(journalId, entryId, callback) {
  	/*
  	this.journals.forEach(element => {
  		if(element.id === parseInt(journalId)) {
  			element.entries.forEach(el => {
  				if(el.id === parseInt(entryId)) {
  					callback(el);
  				}
  			})
  		}
  	});*/
  }

  addJournal(journal) {
  	journal.id = this.journals.length;
  	this.journals.push(journal);
  	console.log(this.journals);
  }

  allJournals() {
  	return this.journals;
  }

  constructor() { }

}
