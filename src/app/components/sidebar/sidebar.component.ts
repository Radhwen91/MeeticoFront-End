import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { User } from 'src/app/_models/user';
import { DataService } from 'src/app/_services/data.service';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-chart-bar-32 text-info', class: '' },
  { path: '/user-management', title: 'User Management', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/event-management', title: 'Event Management', icon: 'ni-tie-bow text-pink', class: '' },
  { path: '/feedback-management', title: 'Feedback Management', icon: 'ni-laptop text-cyan', class: '' },
  { path: '/publication-management', title: 'Publication Management', icon: 'ni-notification-70 text-blue', class: '' },
  { path: '/request-management', title: 'Request Management', icon: 'ni-badge text-black', class: '' },
  { path: '/reclamation-management', title: 'Reclamation Management', icon: 'ni-paper-diploma text-orange', class: '' },
  { path: '/trip-management', title: 'Trip Management', icon: 'ni-square-pin text-green', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  menuItems: any[];
  isCollapsed = true;
  user: User;
  socialUser: SocialUser;
  constructor(private router: Router, private tokenService: TokenService, private socialAuthService: SocialAuthService, private dataService: DataService, private userService: UserService, private matDialog: MatDialog) { }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
    this.user = this.tokenService.getUser();
    if (this.user) {
      this.socialUser = this.tokenService.getSocialUser();
      if (this.socialUser.provider == "FACEBOOK") this.socialUser.photoUrl = this.socialUser.response.picture.data.url;
    }
    else this.userService.signInStatus(this.user.userId).subscribe();
  }
  changePassword() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '200px',
      left: '650px',
    };
    let dialogRef = this.matDialog.open(SidebarPasswordDialog, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        this.user.password = data.newPassword;
        this.tokenService.saveUser(this.user);
        this.userService.updateProfile(this.user).subscribe();
      }
    );
  }
  signOut() {
    if (this.socialUser) {
      this.userService.signOutStatus(this.user.userId).subscribe();
      this.tokenService.signOut();
    }
    else {
      this.socialAuthService.signOut();
      this.dataService.currentStatus.subscribe(loggedIn => loggedIn = !loggedIn);
    }
    this.router.navigate(['login']);
  }
}

@Component({
  selector: 'app-sidebar-password-dialog',
  template: `<h4 mat-dialog-title class="text-center">Change Password</h4>
  <br/>
  <mat-dialog-content [formGroup]="form">
      <mat-form-field>
          <input matInput placeholder="New Password" formControlName="newPassword" [(ngModel)]="newPassword" name="newPassword">
      </mat-form-field>
      <br/>
      <mat-form-field>
        <input matInput placeholder="Confirm Password" formControlName="confirmPassword" [(ngModel)]="confirmPassword" name="confirmPassword">
    </mat-form-field>
      <br/>
  </mat-dialog-content>
  <mat-dialog-actions>
      <button class="mat-raised-button mat-primary" (click)="save()">Save</button>
      <button class="mat-raised-button" style="margin-left: 25%;" (click)="close()">Close</button>
  </mat-dialog-actions>`
})

export class SidebarPasswordDialog implements OnInit {
  form: FormGroup;
  newPassword: string;
  confirmPassword: string;
  constructor(private dialogRef: MatDialogRef<SidebarPasswordDialog>, private formBuilder: FormBuilder) { }
  ngOnInit() {
    document.getElementById(this.dialogRef.id).style.cssText = `background: white`;
    this.form = this.formBuilder.group({
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword
    });
  }
  save() {
    this.dialogRef.close(this.form.value);
  }
  close() {
    this.dialogRef.close();
  }
}
