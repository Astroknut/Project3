import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import { WatsonService } from '../newWatson.service';


@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css'],
  providers: [JournalService, WatsonService]
})
export class NewEntryComponent implements OnInit {

  getTone(){
    this.watsonService.getTone();
  }

  constructor(
    private watsonService: WatsonService,
  	private journalService: JournalService

  ) { }

  ngOnInit() {
  	
  }

}
