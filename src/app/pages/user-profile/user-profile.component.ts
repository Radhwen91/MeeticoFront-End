import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  focus: boolean;
  user: User;
  age: number;
  constructor(private tokenService: TokenService, private userService: UserService) { }
  ngOnInit() {
    this.user = this.tokenService.getUser();
    let timeDiff = Math.abs(Date.now() - this.user.birthday.getTime());
    console.log(timeDiff)
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
  }
  uploadImage(event) {
    let formData = new FormData();
    this.user.picture = event.target.files.item(0);
    formData.append('file', this.user.picture);
    this.userService.assignPictureToUser(this.user.userId, formData).subscribe(
      user => {
        this.tokenService.saveUser(user);
        window.location.reload();
      }
    );
  }
}
