import { Component, OnInit, Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()

export class AuthGuard implements CanActivate {

	constructor (private router: Router) {}

	CanActivate() {
		if(localStorage.getItem('currentUser')) {
			//logged in so return true
			return true;
		}

			//not logged in so redirect to login page
			this.router.navigate(['/login']);
			return false;
	}
}

// @Component({
//   selector: 'app-guards',
//   templateUrl: './guards.component.html',
//   styleUrls: ['./guards.component.css']
// })
// export class GuardsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

}
