import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import * as ToneAnalyzerV3 from 'watson-developer-cloud/tone-analyzer/v3';



// let tone_analyzer = new ToneAnalyzerV3({
//   username: '86929996-bdc0-4b96-af10-fe131ac9450c',
//   password: 'xex04rwp3mtE',
//   version_date: '2016-05-19'
// });



@Injectable()
export class WatsonService {


	getTone(data){
		console.log('getTone working WatsonService');

		var tone_analyzer = new ToneAnalyzerV3({
    	username: '86929996-bdc0-4b96-af10-fe131ac9450c',
    	password: 'xex04rwp3mtE',
    	version_date: '2016-05-19'
    	});

    	var params = {
  		text: 'here is some demo text to analyze.',
 	    tones: 'emotion, social, language'
		};

    	tone_analyzer.tone(params, function(error, tone) {
  			if (error)

    			console.log('tone_analyzer response error:', error);
  			else
   		    	console.log(JSON.stringify(tone, null, 2));
  		});


// 		this.http.get('https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?text="Check out this text friend"&tones=emotion&sentences=false&version=2016-05-19').subscribe(data => {
// 			this.result = data.json();
// 			console.log('got data');
// 			console.log(this.result);
	
// })
}


 
 constructor(private http : Http) { }


};






