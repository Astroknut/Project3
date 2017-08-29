import { Component, OnInit, NgModule } from '@angular/core';
import { WatsonService } from '../watson/watson.service';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
    ]
  })

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})



export class NewEntryComponent implements OnInit {
   journal : any = 'Here is some placeholder text that binds two ways thanks to ngModel!';
  

  getTone(){
   let journalText = this.journal;
   console.log(journalText)
   this.watsonService.getTone(journalText);
    
    }

  constructor(
  	private watsonService : WatsonService
  	) { }

  ngOnInit() {
  }
  
}
