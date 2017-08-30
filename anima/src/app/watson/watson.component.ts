import { Component, OnInit } from '@angular/core';
import { WatsonService } from '../watson.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watson',
  templateUrl: './watson.component.html',
  styleUrls: ['./watson.component.css']
})
export class WatsonComponent implements OnInit {
	
  
  constructor(
  	private watsonService : WatsonService
  	) { }

  ngOnInit() {
  }
  getTone(data){
  	console.log("check is working")
  	this.watsonService.getTone(data);
  	}

}
