
import { Component, OnInit, NgModule } from '@angular/core';
// import { WatsonService } from '../watson/watson.service';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { JournalService } from '../journal.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css'],
})



export class NewEntryComponent implements OnInit {
 
  constructor(public http:Http) { }


  ngOnInit() {
    
  }
    
  journal:any;  
  result;
  angerLevel;
  disgustLevel;
  fearLevel;
  joyLevel;
  sadnessLevel;
    

  getTone(){
     // let tones = this.result.document_tone.tone_categories[0].tones;
      this.http.get('https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?text='+this.journal+'&tones=emotion&sentences=false&version=2016-05-19').subscribe(data => {
      this.result = data.json();
      console.log('got data');
      console.log(this.result.document_tone.tone_categories[0].tones);
      let tones = this.result.document_tone.tone_categories[0].tones;
      let angerLevel = tones[0].score*100;
      let disgustLevel = tones[1].score*100;
      let fearLevel = tones[2].score*100;
      let joyLevel = tones[3].score*100;
      let sadnessLevel = tones[4].score*100;
      console.log(angerLevel, disgustLevel, fearLevel, joyLevel, sadnessLevel);
      //console.log(tones);
      })
  }
}
