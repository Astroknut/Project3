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
  entries;
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
    this.journalService.journal(this.journalId)
      .subscribe(response => {
        that.journal = response.json();
        that.journal.entries.forEach(element => {
          element.blurb = element.text.substring(0, 60) + "...";
        })
        //console.log(that.journal);
    });
  }
}
