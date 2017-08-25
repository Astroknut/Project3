import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-all-journals',
  templateUrl: './all-journals.component.html',
  styleUrls: ['./all-journals.component.css']
})
export class AllJournalsComponent implements AfterViewInit {

  journals = [
      {
        id: 1,
        name: 'Daily Journal',
        color: 'blue'
      },
      {
        id: 2,
        name: 'Creative Writing',
        color: 'red'
      }
  ];

  selected;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {

    this.selected = this.journals[1].id;
    window.document.getElementById('journal1').classList.add('selected');

  }
}
