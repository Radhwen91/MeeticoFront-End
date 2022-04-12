import { Component, OnInit } from '@angular/core';
import { TokenService } from '../_services/token.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoggedIn = false;
  currentUser: any;
  constructor(private token: TokenService) { }
  ngOnInit() {
    if(this.token.getToken()){
      this.isLoggedIn = true;
      this.currentUser = this.token.getUser();
    }
  }
}