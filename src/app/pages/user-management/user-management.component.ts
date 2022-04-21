import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {
  users: User[];
  currentUser: User;
  focus: boolean;
  input: any;
  constructor(private userService: UserService, private dialog: MatDialog, private snackBar: MatSnackBar) { }
  ngOnInit() {
    this.userService.retrieveAllUsers().subscribe(
      users => {
        this.users = users;
      }
    );
  }
  openDialog() {
    
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
