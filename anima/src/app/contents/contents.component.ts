import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css'],
  providers: [JournalService]
})
export class ContentsComponent implements OnInit {

  journal;
  journalId;
  
  constructor(
  	private route: ActivatedRoute,
    private journalService: JournalService
  ) { }

  ngOnInit() {
    // Get journal id from URL
  	this.route.parent.params.forEach( param => {
      this.journalId = param.id;
    });

    // Grab corresponding journal from JournalService
    let that = this;
    this.journalService.journal(this.journalId, function(result) {
      that.journal = result;
      
      that.journal.entries.forEach(el => {
        el.blurb = el.text.substring(0, 50) + "... ";
      });
    });
  }
}
