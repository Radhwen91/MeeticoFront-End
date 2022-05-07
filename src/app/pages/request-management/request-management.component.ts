import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request';
import { User } from 'src/app/models/user';
import { RequestService } from 'src/app/services/request.service';
import { TokenService } from 'src/app/services/token.service';

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
    this.requestService.deleteRequest(this.currentRequest.requestId).subscribe(request => this.ngOnInit());
  }
  searchForRequests(event) {
    this.requestService.searchForRequests(event.target.value).subscribe(
      requests => {
        this.requests = requests;
      }
    );
  }
}
