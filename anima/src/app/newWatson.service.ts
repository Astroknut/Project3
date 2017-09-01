// import { Injectable } from '@angular/core';


// @Injectable()
// export class WatsonService {

// 	getTone(){
//     console.log('getTone working WatsonService');

//     var tone_analyzer = new ToneAnalyzerV3({
//       username: '86929996-bdc0-4b96-af10-fe131ac9450c',
//       password: 'xex04rwp3mtE',
//       version_date: '2016-05-19'
//       });

//       var params = {
//       text: 'here is some demo text to analyze.',
//        tones: 'emotion, social, language'
//     };

//       tone_analyzer.tone(params, function(error, tone) {
//         if (error)

//           console.log('tone_analyzer response error:', error);
//         else
//            console.log(JSON.stringify(tone, null, 2));
//       });
//   }
// }