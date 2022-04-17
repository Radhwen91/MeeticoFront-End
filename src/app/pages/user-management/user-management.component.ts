import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {
  @Input() name;
  focus: any;
  users: any[];
  currentUser: any;
  input: any;

  constructor(private userService: UserService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  
  ngOnInit() {
    this.userService.retrieveAllUsers().subscribe(
      data => {
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
  searchForUsers(event) {
    console.log(event);
    this.userService.searchForUsers(event.target.value).subscribe(
      data => {
        this.users = data;
      }
    );
  }
  userDetails(content) {
    const modalRef = this.modalService.open(content);
    modalRef.componentInstance.name = 'World';
  }
}
