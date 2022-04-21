import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/_models/request';
import { User } from 'src/app/_models/user';
import { RequestService } from 'src/app/_services/request.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-request-management',
  templateUrl: './request-management.component.html',
  styleUrls: ['./request-management.component.scss']
})

export class RequestManagementComponent implements OnInit {
  user: User;
  requests: Request[];
  currentRequest: Request;
  focus: boolean;
  input: any;
  constructor(private tokenService: TokenService, private requestService: RequestService) { }
  ngOnInit() {
    this.user = this.tokenService.getUser();
    this.requestService.retrieveAllRequests(this.user.userId).subscribe(
      requests => {
        this.requests = requests;
      }
    );
  }
  setActiveRequest(request: Request) {
    this.currentRequest = request;
  }
  removeRequest() {
    this.requestService.deleteRequest(this.currentRequest.requestId).subscribe();
    window.location.reload();
  }
  searchForRequests(event) {
    this.requestService.searchForRequests(event.target.value).subscribe(
      requests => {
        this.requests = requests;
      }
    );
  }
}
