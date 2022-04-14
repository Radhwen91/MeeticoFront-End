import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})

export class UserManagementComponent implements OnInit {
  
  users: any;
  currentUser: any;
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  constructor(private userService: UserService) { }

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

}
