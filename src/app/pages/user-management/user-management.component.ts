import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  constructor(private userService : UserService) { }
  public users : any;
  ngOnInit() {
    this.userService.retrieveAllUsers().subscribe(
      data => {
        console.log(data);
        this.users = data;
      }
    );
  }

}
