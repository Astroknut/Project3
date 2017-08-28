import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  journal = {
  	name: "Daily Journal",
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
  			text: "Today I ate a spider.  Donald Trump showed up at my door and I punched him right in the kisser.  What a fuck.",
  			blurb: ""
  		},
  		{
  			id: 3,
  			date: "8/28/17",
  			text: "Today I ate a spider.  Donald Trump showed up at my door and I punched him right in the kisser.  What a fuck.",
  			blurb: ""
  		}
  	]
  }

  journalId;
  
  constructor(
  	private route: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.route.params.forEach( param => this.journalId = param.id);

  	this.journal.entries.forEach(element => {
  		element.blurb = element.text.substring(0, 50) + "... ";
  	});
  }
}
