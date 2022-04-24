import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { User } from 'src/app/_models/user';
import { DataService } from 'src/app/_services/data.service';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {
  users: User[];
  selectedUser: User;
  focus: boolean;
  input: any;
  subscription: Subscription;
  constructor(private userService: UserService, private dialog: MatDialog) { }
  ngOnInit() {
    this.userService.retrieveAllUsers().subscribe(
      users => {
        this.users = users;
        console.log(users)
      }
    );
  }
  openDialog(user: User) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = user;
    dialogConfig.position = {
      top: '50px',
      left: '50px'
    };
    this.dialog.open(UserDetailsDialog, dialogConfig);
  }
  removeUser(selectedUser) {
    this.userService.removeUser(selectedUser.userId).subscribe(
      selectedUser => {
        window.location.reload();
      }
    );
  }
  searchForUsers(event) {
    this.userService.searchForUsers(event.target.value).subscribe(
      users => {
        this.users = users;
      }
    );
  }
}

@Component({
  selector: 'app-user-details-dialog',
  templateUrl: '../_dialogs/user-details.dialog.html'
})

export class UserDetailsDialog {
  follower: User;
  selectedUser: User;
  age: number;
  constructor(private dialogRef: MatDialogRef<UserDetailsDialog>, @Inject(MAT_DIALOG_DATA) user, private tokenService: TokenService, private userService: UserService, private dataService: DataService) {
    this.follower = this.tokenService.getUser();
    this.selectedUser = user;
    this.age = this.getAge(this.selectedUser.birthday.toString());
  }
  getAge(date: string): number {
    let today = new Date();
    let list = date.split('-', 3);
    let birthday = new Date(+list[0], +list[1], +list[2]);
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m == 0 && today.getDate() < birthday.getDate())) {
      age = age - 1;
    }
    return age;
  }
  followUser(selectedUser: User): void {
    this.userService.followUser(this.follower.userId, selectedUser.userId).subscribe();
  }
  unfollowUser(selectedUser: User): void {
    this.userService.followUser(this.follower.userId, selectedUser.userId).subscribe();
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
