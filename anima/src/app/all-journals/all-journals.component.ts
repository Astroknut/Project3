import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-journals',
  templateUrl: './all-journals.component.html',
  styleUrls: ['./all-journals.component.css']
})
export class AllJournalsComponent implements OnInit {

  journals = [
  	{
  		name: 'Daily Journal',
  		color: 'blue'
  	},
  	{
  		name: 'Creative Writing',
  		color: 'red'
  	}
  ];

  constructor() { }

  ngOnInit() {
  }

}
