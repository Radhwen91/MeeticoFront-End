import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  constructor(private user: UserService) { }
  ngOnInit() {
    this.user.getPublicContent().subscribe({
      next: (data: any) => {
        this.content = data;
      },
      error: (err: any) => {
        this.content = JSON.parse(err.error).message;
      }
    });
  };
};