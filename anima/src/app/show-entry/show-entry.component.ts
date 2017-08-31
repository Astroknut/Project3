import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-show-entry',
  templateUrl: './show-entry.component.html',
  styleUrls: ['./show-entry.component.css'],
  providers: [JournalService]
})
export class ShowEntryComponent implements OnInit {

  editing = false;
  oldText = "";

  entry;
  entryId;
  journalId;

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

  constructor(
    private route: ActivatedRoute,
    private journalService: JournalService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => this.entryId = param.id );
    this.route.parent.params.forEach( param => this.journalId = param.id );

    let that = this;
    this.journalService.entry(this.journalId, this.entryId, function(result) {
      that.entry = result;
    })
  }
}
