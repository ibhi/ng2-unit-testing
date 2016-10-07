import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Rx';


@Injectable()
export class UserServiceService {

  constructor(private http: Http) { }

  getUsers(){
  	return this.http.get('https://api.github.com/users')
  		.map((res) => res.json());
  }

}
