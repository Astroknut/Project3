import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css'],
  providers: [JournalService]
})
export class NewEntryComponent implements OnInit {

  constructor(
  	private journalService: JournalService
  ) { }

  ngOnInit() {
  	
  }

}
