import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-all-journals',
  templateUrl: './all-journals.component.html',
  styleUrls: ['./all-journals.component.css'],
  providers: [JournalService]
})
export class AllJournalsComponent implements OnInit {

  selected = 0;

  journals_left = [];
  journals = [];
  journals_right = []

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
      this.journals.push(this.journals_right.shift());
      this.updateSelected();
    }
  }

  cycleLeft() {
    if(this.journals_left.length > 0) {
      this.journals_right.unshift(this.journals.pop());
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

  constructor(
    private journalService: JournalService
  ) { }

  ngOnInit() {
    this.journals       = this.journalService.allJournals();

    // Journals should start with only the first element.
    this.journals       = this.journals.slice(0,1);

    // journals_right should include everything except the first element.
    this.journals_right = this.journalService.allJournals();
    this.journals_right.shift();
  }
}
