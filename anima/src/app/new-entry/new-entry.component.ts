import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css'],
  providers: [JournalService]
})
export class NewEntryComponent implements OnInit {

  entry_text;
  journalId;

  saveEntry() {
    let entry = {
      text: this.entry_text,
      date: new Date().toDateString(),
      journalId: this.journalId
    };
    let that = this;
    this.journalService.addEntry(entry)
      .subscribe(result => {
        console.log(result);
        that.router.navigate(['../journal/', this.journalId, 'contents']);
      })
  }

  constructor(
  	private journalService: JournalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.parent.params.forEach( param => {
      this.journalId = param.id;
    });
  	
  }

}
