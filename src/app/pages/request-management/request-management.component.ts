import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-request-management',
  templateUrl: './request-management.component.html',
  styleUrls: ['./request-management.component.scss']
})

export class RequestManagementComponent implements OnInit {
  users: User[];
  currentUser: User;
  focus: boolean;
  input: any;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.retrieveAllUsers().subscribe(
      users => {
        this.users = users;
      }
    );
  }
  setActiveUser(user: User) {
    this.currentUser = user;
  }
  removeUser() {
    this.userService.removeUser(this.currentUser.userId).subscribe();
    window.location.reload();
  }
  searchForUsers(event) {
    this.userService.searchForUsers(event.target.value).subscribe(
      users => {
        this.users = users;
      }
    );
  }
}
