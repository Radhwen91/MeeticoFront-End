import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})

export class AdminProfileComponent implements OnInit {
  focus: boolean;
  user: User;
  age: number;
  address: string[] = [];
  disabled = true;
  constructor(private tokenService: TokenService, private userService: UserService) { }
  ngOnInit() {
    this.user = this.tokenService.getUser();
    if (this.tokenService.getUser().address) this.address = this.user.address.split(", ", 3);
  }
  uploadPicture(event) {
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
  editProfile() {
   this.disabled = false;
  }
  updateProfile() {
    if (this.address[0] && this.address[1] && this.address[2]) this.user.address = this.address[0] + ", " + this.address[1] + ", " + this.address[2];
    this.userService.updateProfile(this.user).subscribe(
      user => {
        this.tokenService.saveUser(user);
        this.disabled = true;
        this.ngOnInit();
      }
    );
  }
}
