import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  focus: any;
  userId: any;
  picture: any;
  image: File;
  constructor(private tokenService: TokenService, private userService: UserService) { }
  ngOnInit() {
    this.userId = this.tokenService.getUser().userId;
  }
  uploadImage(event) {
    this.image = event.target.files.item(0);
    this.userService.assignPictureToUser(this.userId, this.image).subscribe(
      user => {
        this.tokenService.saveUser(user);
        window.location.reload();
      }
    );
  }
}
