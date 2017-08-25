import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-journals',
  templateUrl: './all-journals.component.html',
  styleUrls: ['./all-journals.component.css']
})
export class AllJournalsComponent implements OnInit {

  journals = [
  	{
      selected: true,
  		name: 'Daily Journal',
  		color: 'blue'
  	},
  	{
      selected: false,
  		name: 'Creative Writing',
  		color: 'red'
  	}
  ];

  constructor() { }

  ngOnInit() {

  }

}
