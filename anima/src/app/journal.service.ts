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

  oneEntry(entryId) {
  	return this.http.get(`${this.baseUrl}/entry-show/${entryId}`)
  }

  allEntries(journalId) {
  	return this.http.get(`${this.baseUrl}/journal-entries/${journalId}`)
  }

  addJournal(journal) {
  	return this.http.post(`${this.baseUrl}/journals-new`, journal);
  }

  allJournals() {
  	return this.http.get(`${this.baseUrl}/journals-index`);
  }

  constructor(private http: Http) { }
}
