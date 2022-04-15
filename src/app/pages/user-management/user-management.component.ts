import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {
  users: any[];
  currentUser: any;
  constructor(private userService: UserService, private modalService: NgbModal) { }
  ngOnInit() {
    this.userService.retrieveAllUsers().subscribe(
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
    this.userService.removeUser(this.currentUser.userId).subscribe();
    window.location.reload();
  }
  userDetails() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({selector: 'ngbd-modal-component', templateUrl: './user-management.component.html'})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}
  userDetails() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
