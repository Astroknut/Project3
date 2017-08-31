import { Component, OnInit } from '@angular/core';
import { NewEntryComponent } from '../new-entry/new-entry.component'



@Component({
  selector: 'app-show-journal',
  templateUrl: './show-journal.component.html',
  styleUrls: ['./show-journal.component.css'],
  providers: [NewEntryComponent]
})


export class ShowJournalComponent implements OnInit {
  
  angerLevel = this.newEntryComponent.angerLevel;
  disgustLevel;
  fearLevel;
  joyLevel;
  sadnessLevel;

  test1(){
  	console.log("test1 on show-journal hit")
  	console.log(this.angerLevel)
  }

  constructor(private newEntryComponent:NewEntryComponent) { }


  ngOnInit() {

  }

}
