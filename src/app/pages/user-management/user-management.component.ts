import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { User } from 'src/app/_models/user';
// import { DataService } from 'src/app/_services/data.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {
  users: User[];
  user: User;
  focus: boolean;
  input: any;
  subscription: Subscription;
  constructor(private userService: UserService, private dialog: MatDialog) {}
  ngOnInit() {
    this.userService.retrieveAllUsers().subscribe(
      users => {
        this.users = users;
      }
    );
    // this.subscription = this.dataService.currentUser.subscribe(user => this.user = user);
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
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
  setActiveUser(selectedUser: User) {
    this.user = selectedUser;
  }
  removeUser() {
    this.userService.removeUser(this.user.userId).subscribe();
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
  user: any;
  constructor(private dialogRef: MatDialogRef<UserDetailsDialog>) { }
  ngOnInit() {
    
  }
  save() {
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
