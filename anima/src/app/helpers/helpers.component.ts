import { Component, OnInit } from '@angular/core';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod }  from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
	//configure fake backend
	backend.connections.subscribe((connection: MockConnection) => {
		let testUser = {username: 'test', password: 'test', firstName: 'Test', lastName: 'User'};

		//wrap a timeout to simulate server api call
		setTimeout(() => {

			//fake authenticate api end point
			if(connection.request.ur.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
				//get parameters from post request
				let params = JSON.parse(connection.request.getBody());

				//check user credentials anx return fake jwt if valid
				if(params.username === testUser.username && params.password === testUser.password) {
					connection.mockRespond(new Response (
						new ResponseOptions ({ status: 200, body: {token: 'fake-jwt-token'} })
						));
				} else {
					connection.mockRespond(new Response (
						new ResponseOptions ({ status: 200})
						));
				}
			}
			// fake users api end point
			if (connection.request.url.endsWith ('/api/users') && connection.request.method === RequestMethod.Get) {
				//check for fake auth token in header and return test users if valid, this security is implemented server side
				//in a real application
				if(connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
					connection.mockRespond(new Response (
						new ResponseOptions ({status: 200, body: [testUser] })
					));
				} else {
					//return 40 not authorised if token is null or invalid
					connection.mockRespond(new Response (
						new ResponseOptions ({status: 401})
					));
				}	
			}
			
			}
			}
		})
	})
}

@Component({
  selector: 'app-helpers',
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.css']
})
export class HelpersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
