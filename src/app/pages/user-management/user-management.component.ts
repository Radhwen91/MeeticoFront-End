import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {
  
  public users: any;
  public currentUser: any;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.retrieveAllUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }

  setActiveUser(user: any) {
    this.currentUser = user;
  }

  removeUser() {
    this.userService.removeUser(this.currentUser.userId).subscribe();
    window.location.reload();
  }

}
