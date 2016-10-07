import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserServiceService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  users: Array<any>;

  constructor(private user: UserServiceService) {

  }

  ngOnInit() {
  	this.user.getUsers()
  		.subscribe(users => {
  			this.users = users;
  			console.log(this.users);
  		});

  }

}
