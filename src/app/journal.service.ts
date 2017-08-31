import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs';
//import { Subject } from 'rxjs/Subject';

@Injectable()
export class JournalService {

  baseUrl = process.env.PORT || 'http://localhost:3000';

  constructor(private http: Http) { }

  journal(id) {
  	return this.http.get(`${this.baseUrl}/journal-show/${id}`);
  }

  oneEntry(entryId) {
  	return this.http.get(`${this.baseUrl}/entry-show/${entryId}`)
  }

  allEntries(journalId) {
  	return this.http.get(`${this.baseUrl}/journal-entries/${journalId}`)
  }

  addEntry(entry) {
  	return this.http.post(`${this.baseUrl}/entry-new`, entry);
  }

  updateEntry(entryId, entry) {
  	return this.http.put(`${this.baseUrl}/entry/${entryId}`, entry);
  }

  addJournal(journal) {
  	return this.http.post(`${this.baseUrl}/journals-new`, journal);
  }

  allJournals() {
  	return this.http.get(`${this.baseUrl}/journals-index`);
  }
}
