import { Injectable } from '@angular/core';


@Injectable()
export class JournalService {

  journals = [
    {
      id: 1,
      name: 'Daily Journal',
      color: 'blue',
      selected: true,
      moving_left: false,
      moving_right: false,
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
  			text: "Scooby Doo.  Donald Trump showed up at my door and I punched him right in the kisser.  What a fuck.",
  			blurb: ""
  		},
  		{
  			id: 3,
  			date: "8/28/17",
  			text: "ayayayaya.  Donald Trump showed up at my door and I punched him right in the kisser.  What a fuck.",
  			blurb: ""
  		}
      ]
    },
    {
      id: 2,
      name: 'Creative Writing',
      color: 'red',
      selected: false,
      moving_left: false,
      moving_right: false,
      entries: []
    },
    {
      id: 3,
      name: 'Questions',
      color: 'orange',
      selected: false,
      moving_left: false,
      moving_right: false,
      entries: []
    },
    {
      id: 4,
      name: 'YAYA',
      color: 'blue',
      selected: false,
      moving_left: false,
      moving_right: false,
      entries: []
    },
    {
      id: 5,
      name: 'Hooray',
      color: 'orange',
      selected: false,
      moving_left: false,
      moving_right: false,
      entries: []
    },
  ];

  journal(id, callback) {
  	this.journals.forEach(element => {
  		if(element.id === parseInt(id)) {
  			callback(element);
  		}
  	});
  }

  allJournals() {
  	return this.journals;
  }

  constructor() { }

}
