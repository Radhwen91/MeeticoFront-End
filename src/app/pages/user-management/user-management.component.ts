import { Component, OnInit, Inject, Type } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import * as moment from "moment";
import * as lastSeenAgo from "last-seen-ago";
import { User } from "src/app/models/user";
import { TokenService } from "src/app/services/token.service";
import { UserService } from "src/app/services/user.service";
import { Attribute } from "src/app/models/sort";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger" (click)="modal.close('Ok click')">Ok</button>`;
  connectedUser: User;
  attributes: Attribute[] = [
    { descendant: false, hidden: false },
    { descendant: false, hidden: true },
    { descendant: false, hidden: true },
    { descendant: false, hidden: true }
  ];
  index: number;
  sortedBy: string[] = ["userId", "name", "lastSeen", "followers"];
  itemsPerPage: number = 2;
  currentPage: number = 1;
  users: User[];
  lastSeens: string[];
  completions: number[] = [];
  focus: boolean;
  input: string;
  age: number;
  me: boolean;
  followed: boolean;
  constructor(private tokenService: TokenService, private userService: UserService, private matDialog: MatDialog, private modalService: NgbModal) { }
  ngOnInit(): void {
    this.connectedUser = this.tokenService.getUser();
    for (let i = 0; i < this.attributes.length; i++) {
      if (!this.attributes[i].hidden) this.index = i;
    }
    this.userService.retrieveAllUsers(this.attributes[this.index].descendant, this.sortedBy[this.index]).subscribe(
      users => {
        this.users = users;
        this.lastSeens = [];
        users.forEach(
          user => {
            if (user.userId == this.connectedUser.userId) this.lastSeens.push('active');
            else {
              let timestamp = Math.floor(new Date(user.lastSeen.toString().slice(0, 19)).getTime() / 1000);
              this.lastSeens.push('last seen ' + lastSeenAgo.getLastSeen(timestamp).toString().toLowerCase());
            }
          }
        );
      }
    );
    this.userService.calculateProfileCompletion().subscribe(data => this.completions = data);
  }
  updateIcon(iconId: number) {
    if (this.attributes[iconId].hidden) {
      this.attributes.forEach(
        attribute => {
          attribute.hidden = true;
        }
      );
      this.attributes[iconId].hidden = false;
    }
    else this.attributes[iconId].descendant = !this.attributes[iconId].descendant;
    this.ngOnInit();
  }
  getAge(date: Date): number {
    return moment().diff(date, 'years');
  }
  openDialog(selectedUser: User) {
    this.age = this.getAge(selectedUser.birthday);
    if (this.connectedUser.userId == selectedUser.userId) this.me = !this.me;
    for (let i = 0; i < selectedUser.followers.length; i++) {
      if (this.connectedUser.userId == selectedUser.followers[i].userId) this.followed = !this.followed;
    }
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      connectedUser: this.connectedUser,
      selectedUser: selectedUser,
      age: this.age,
      me: this.me,
      followed: this.followed
    };
    dialogConfig.position = {
      top: '50px',
      left: '50px'
    };
    let dialogRef = this.matDialog.open(UserDetailsDialog, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if (data.me) this.me = !this.me;
        if (data.followed) this.followed = !this.followed;
        if (data.clicked) {
          this.me = undefined;
          this.followed = undefined;
          this.ngOnInit();
        }
      }
    );
  }
  openModal(selectedUser: User) {
    let modalRef = this.modalService.open(NgbdModalConfirm);
    modalRef.result.then(
      clicked => {
        if (clicked) {
          this.removeUser(selectedUser);
        }
      }
    );
  }
  removeUser(selectedUser) {
    this.userService.removeUser(selectedUser.userId).subscribe(selectedUser => this.ngOnInit());
  }
  searchForUsers(event) {
    this.userService.searchForUsers(event.target.value).subscribe(
      users => {
        this.users = users;
        this.lastSeens = [];
        users.forEach(
          user => {
            if (user.userId == this.connectedUser.userId) this.lastSeens.push('active');
            else {
              let timestamp = Math.floor(new Date(user.lastSeen.toString().slice(0, 19)).getTime() / 1000);
              this.lastSeens.push('last seen ' + lastSeenAgo.getLastSeen(timestamp).toString().toLowerCase());
            }
          }
        );
      }
    );
  }
}

@Component({
  selector: 'app-user-details-dialog',
  template: `<div class="col-xl-4" style="margin-left: 30em;">
  <div class="card card-profile shadow">
      <div class="row   justify-content-center">
          <div class="col-lg-3 order-lg-2">
              <label class="card-profile-image btn btn-bwm">
                  <img src="{{ selectedUser.picture ? selectedUser.picture : 'assets/upload/default.jpg'}}"
                      class="rounded-circle" style="margin-left: 5px;">
              </label>
          </div>
      </div>
      <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
          <div class="d-flex justify-content-between">
              <a [hidden]="followed? true : false || me? true : false" class="btn btn-sm btn-info" (click)="followUser(selectedUser)">Follow</a>
              <a [hidden]="followed? false : true" class="btn btn-sm btn-danger" (click)="unfollowUser(selectedUser)">Unfollow</a>
              <a [hidden]="me? true : false" class="btn btn-sm btn-success">Message</a>
          </div>
      </div>
      <div class="card-body pt-0 pt-md-4">
          <div class="row">
              <div class="col">
                  <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                          <span class="heading">22</span>
                          <span class="description">Friends</span>
                      </div>
                      <div>
                          <span class="heading">10</span>
                          <span class="description">Photos</span>
                      </div>
                      <div>
                          <span class="heading">89</span>
                          <span class="description">Comments</span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="text-center">
              <h3>
                  {{ selectedUser.firstName + ' ' + selectedUser.lastName }}
                  <span class="font-weight-light">, {{ age }}</span>
              </h3>
              <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>{{ selectedUser.address }}
              </div>
              <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
              </div>
              <div>
                  <i class="ni education_hat mr-2"></i>University of Computer Science
              </div>
              <hr class="my-4" />
              <p>***************************************************</p>
              <button class="mat-raised-button bg-warning" (click)="closeDialog()">Close</button>
          </div>
      </div>
  </div>
</div>`
})

export class UserDetailsDialog implements OnInit {
  connectedUser: User;
  selectedUser: User;
  age: number;
  me: boolean;
  followed: boolean;
  clicked: boolean;
  constructor(private dialogRef: MatDialogRef<UserDetailsDialog>, @Inject(MAT_DIALOG_DATA) data, private userService: UserService, private formBuilder: FormBuilder) {
    this.connectedUser = data.connectedUser;
    this.selectedUser = data.selectedUser;
    this.age = data.age;
    this.me = data.me;
    this.followed = data.followed;
  }
  ngOnInit(): void {
    document.getElementById(this.dialogRef.id).style.cssText = `background: transparent; box-shadow: none; overflow: visible !important;`;
  }
  followUser(selectedUser: User): void {
    this.userService.followUser(this.connectedUser.userId, selectedUser.userId).subscribe(
      data => {
        this.followed = !this.followed;
        this.clicked = !this.clicked;
      }
    );
  }
  unfollowUser(selectedUser: User): void {
    this.userService.unfollowUser(this.connectedUser.userId, selectedUser.userId).subscribe(
      data => {
        this.followed = !this.followed;
        this.clicked = !this.clicked;
      }
    );
  }
  closeDialog() {
    this.dialogRef.close(
      this.formBuilder.group(
        {
          me: this.me,
          followed: this.followed,
          clicked: this.clicked
        }
      ).value
    )
  }
}

@Component({
  selector: 'ngbd-modal-confirm',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="btn-close" aria-describedby="modal-title" (click)="modal.close()"></button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete this profile?</strong></p>
    <p>All information associated to this user profile will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-danger" (click)="modal.close(!this.clicked)">Ok</button>
    <button type="button" class="btn btn-outline-secondary" (click)="modal.close()">Cancel</button>
  </div>
  `
})
export class NgbdModalConfirm {
  clicked = false;
  constructor(public modal: NgbActiveModal) { }
}
