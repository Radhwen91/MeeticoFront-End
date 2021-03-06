import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialUser, SocialAuthService } from 'angularx-social-login';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/', title: 'Home', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/reclamation-management', title: 'Reclamations', icon: 'ni-chart-bar-32 text-info', class: '' },
  { path: '/', title: 'Events', icon: 'ni-tie-bow text-pink', class: '' },
  { path: '/', title: 'Feedbacks', icon: 'ni-laptop text-black', class: '' },
  { path: '/', title: 'Publications', icon: 'ni-notification-70 text-blue', class: '' },
  { path: '/', title: 'Trip ', icon: 'ni-square-pin text-green', class: '' }
];

@Component({
  selector: 'app-navbar-front',
  templateUrl: './navbar-front.component.html',
  styleUrls: ['./navbar-front.component.scss']
})
export class NavbarFrontComponent implements OnInit {
  private toggleButton: any;
  private sidebarVisible: boolean;
  public menuItemsFRONT: any[];
  public isCollapsed = true;
  user: User;
  socialUser: SocialUser;
  picture: string;
  constructor(public location: Location, private element: ElementRef, private tokenService: TokenService, private router: Router, private socialAuthService: SocialAuthService, private dataService: DataService, private userService: UserService, private modalService: NgbModal) {
    this.sidebarVisible = false;
  }
  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    this.user = this.tokenService.getUser();
    let location = this.location.prepareExternalUrl(this.location.path());
    if (location != "/home" && location != "/sign-in") {
      if (this.user) {
        this.socialUser = this.tokenService.getSocialUser();
        if (this.socialUser.provider == "FACEBOOK")
          this.socialUser.photoUrl = this.socialUser.response.picture.data.url;
      }
      else this.userService.signInStatus(this.user.userId).subscribe();
    }
    this.menuItemsFRONT = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    // console.log(toggleButton, 'toggle');

    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  };
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    // console.log(html);
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  };
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };
  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    if (titlee === '/documentation') {
      return true;
    }
    else {
      return false;
    }
  }
  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    if (titlee === '/home') {
      return true;
    }
    else {
      return false;
    }
  }
  isLogin() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    if (titlee === '/sign-in') {
      return true;
    }
    else {
      return false;
    }
  }
  changePassword() {
    const modalRef = this.modalService.open(NavbarFrontPasswordDialog);
    modalRef.result.then(response => {
      if (response) {
        this.user.password = response.newPassword;
        this.tokenService.saveUser(this.user);
        this.userService.updateProfile(this.user).subscribe();
      }
    });
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
    this.router.navigate(['sign-in']);
  }
}

@Component({
  selector: 'app-modal-content',
  template: `<div class="modal-header">
            <button class="btn float-right" style="border-color: transparent; background-color: transparent; color: black; font-size: 24px" (click)="modal.close()"><i class="nc-icon nc-simple-remove"></i></button>
            <h4 class="modal-title" style="margin-left: 50px" id="modal-basic-title">Change Password</h4>
          </div>
          <div class="modal-body">
            <form [formGroup]="form">
              <div class="mb-3">
                <label for="newPassword">New Password</label>
                <div class="input-group">
                  <input id="newPassword" class="form-control" placeholder="Enter your new password" name="newPassword" formControlName="newPassword" [(ngModel)]="newPassword">
                </div>
              </div>
              <div class="mb-3">
                <label for="confirmPassword">Confirm Password</label>
                <div class="input-group">
                  <input id="confirmPassword" class="form-control" placeholder="Enter your confirm password" name="confirmPassword" formControlName="confirmPassword" [(ngModel)]="confirmPassword">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" style="margin-right: 20px; margin-bottom: 10px" (click)="modal.close(this.form.value)">Save</button>
          </div>`
})

export class NavbarFrontPasswordDialog {
  form: FormGroup;
  newPassword: string;
  confirmPassword: string;
  constructor(public modal: NgbActiveModal, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword
    });
  }
}
