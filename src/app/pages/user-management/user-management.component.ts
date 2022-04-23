import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { User } from 'src/app/_models/user';
import { DataService } from 'src/app/_services/data.service';
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
  constructor(private userService: UserService, private dialog: MatDialog, private dataService: DataService) {}
  ngOnInit() {
    this.userService.retrieveAllUsers().subscribe(
      users => {
        this.users = users;
      }
    );
  }
  openDialog() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '50px',
      left: '50px'
    };
    this.dialog.open(UserDetailsDialog, dialogConfig);
  }
  setActiveUser(activeUser: User) {
    this.dataService.currentUser.subscribe(selectedUser => this.selectedUser = activeUser)
  }
  removeUser() {
    this.userService.removeUser(this.selectedUser.userId).subscribe();
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

@Component({
  selector: 'app-user-details-dialog',
  templateUrl: '../_dialogs/user-details.dialog.html',
})

export class UserDetailsDialog implements OnInit {
  selectedUser: User;
  constructor(private dialogRef: MatDialogRef<UserDetailsDialog>, @Inject(MAT_DIALOG_DATA) data, private dataService: DataService) { 
    this.selectedUser;
  }
  ngOnInit() {
    this.dataService.currentUser.subscribe(selectedUser => this.selectedUser = selectedUser);
    console.log(this.selectedUser)
  }
  save() {
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
