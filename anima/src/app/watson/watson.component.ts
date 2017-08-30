import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 import { BrowserModule } from '@angular/platform-browser';
 import { FormsModule } from '@angular/forms';
 import { WatsonService } from '../watson.service';

 
 // @NgModule({  !!!!This thorws a Terminal error!
 //   imports: [
 //     BrowserModule,
 //     FormsModule
 //     ]
 //  })

@Component({
  selector: 'app-watson',
  templateUrl: './watson.component.html',
  styleUrls: ['./watson.component.css']
})
export class WatsonComponent implements OnInit {
	
  
  

  ngOnInit() {
  }

  getTone(data){
  	console.log("check is working")
  	this.watsonService.getTone(data);
  	}
constructor(
    private watsonService : WatsonService
    ) { }


}
