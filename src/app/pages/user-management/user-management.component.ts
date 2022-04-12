import { Component, OnInit } from '@angular/core';
import { InitService } from 'src/app/services/init.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {
  
  public users: any;
  public currentUser: any;
  
  constructor(private initService: InitService, private userService: UserService) { }

  ngOnInit() {
    this.initService.retrieveAllUsers().subscribe(
      data => {
        console.log(data);
        this.users = data;
      }
    );
  }

  setActiveUser(user: any) {
    this.currentUser = user;
  }

  removeUser() {
    this.userService.removeUser(this.currentUser.userId).subscribe(
      data => {
        console.log(data);
        window.location.reload();
      }
    );
  }

}
