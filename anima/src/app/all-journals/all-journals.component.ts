import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-all-journals',
  templateUrl: './all-journals.component.html',
  styleUrls: ['./all-journals.component.css']
})
export class AllJournalsComponent implements AfterViewInit {

  selected = 0;

  journals = [
      {
        id: 1,
        name: 'Daily Journal',
        color: 'blue',
        selected: true
      },
      {
        id: 2,
        name: 'Creative Writing',
        color: 'red',
        selected: false
      },
      {
        id: 3,
        name: 'Questions',
        color: 'orange',
        selected: false
      }
  ];

  updateSelected() {
    // Unselect other journals
    this.journals.forEach(element => element.selected = false);
    // Select new journal
    this.journals[this.selected].selected = true;
  }

  cycleLeft() {
    if(this.selected > 0)
      this.selected--;
    this.updateSelected();
  }

  cycleRight() {
    if(this.selected < this.journals.length - 1)
      this.selected++;
    this.updateSelected();
  }

  constructor() { }

  ngAfterViewInit() {
  }
}
