import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  focus: boolean;
  userId: number;
  picture: string;
  constructor(private tokenService: TokenService, private userService: UserService) { }
  ngOnInit() {
    this.userId = this.tokenService.getUser().userId;
  }
  uploadImage(event) {
    const formData = new FormData();
    this.picture = event.target.files.item(0);
    formData.append('file', this.picture);
    this.userService.assignPictureToUser(this.userId, formData).subscribe(
      user => {
        this.tokenService.saveUser(user);
        window.location.reload();
      }
    );
  }
}
