import { Injectable } from '@angular/core';
import { Http } from '@angular/Http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class JournalService {

   baseUrl = 'http://localhost:3000';

  journal(id) {
  	return this.http.get(`${this.baseUrl}/journal-show/${id}`);
  }

  entry(journalId, entryId, callback) {
  	// let journal;
  	// this.journals.forEach(element => {
  	// 	if(element.id === parseInt(journalId)) {
  	// 		element.entries.forEach(el => {
  	// 			if(el.id === parseInt(entryId)) {
  	// 				callback(el);
  	// 			}
  	// 		})
  	// 	}
  	// });
  }

  addJournal(journal) {
  	return this.http.post(`${this.baseUrl}/journals-new`, journal);
  }

  allJournals() {
  	return this.http.get(`${this.baseUrl}/journals-index`);
  }

  constructor(private http: Http) { }
}
