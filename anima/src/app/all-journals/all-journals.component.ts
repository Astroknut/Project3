import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-all-journals',
  templateUrl: './all-journals.component.html',
  styleUrls: ['./all-journals.component.css']
})
export class AllJournalsComponent implements AfterViewInit {

  selected = 0;

  journals_left = [];
  journals = [
    {
      id: 1,
      name: 'Daily Journal',
      color: 'blue',
      selected: true,
      moving_left: false,
      moving_right: false
    }
  ];
  journals_right = [
    {
      id: 2,
      name: 'Creative Writing',
      color: 'red',
      selected: false,
      moving_left: false,
      moving_right: false
    },
    {
      id: 3,
      name: 'Questions',
      color: 'orange',
      selected: false,
      moving_left: false,
      moving_right: false
    }
  ]

  updateSelected() {
    // Unselect other journals
    this.journals_left.forEach(element => element.selected = false );
    this.journals_right.forEach(element => element.selected = false);
    // Select new journal
    this.journals[0].selected = true;
  }

  cycleRight() {
    if(this.journals_right.length > 0) {
      this.journals_left.push(this.journals.pop());
      this.journals.push(this.journals_right.pop());
      this.updateSelected();
    }
  }

  cycleLeft() {
    if(this.journals_left.length > 0) {
      this.journals_right.push(this.journals.pop());
      this.journals.push(this.journals_left.pop());
      this.updateSelected();
    }
  }

  goToJournal(id) {
    
  }

  // In the following two functions, we return id !== id
  // because we want to return TRUE if the journal should
  // NOT be visible.
  visibleJournalLeft(id) {
    return id !== this.journals_left[this.journals_left.length -1].id;
  }

  visibleJournalRight(id) {
    return id !== this.journals_right[0].id;
  }

  constructor() { }

  ngAfterViewInit() {
  }
}
