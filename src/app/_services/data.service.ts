import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../_models/user';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private tokenService: TokenService) { }
  private selectedUser: User = this.tokenService.getUser();
  private loggedIn: boolean = false;
  public currentUser = new BehaviorSubject(this.selectedUser).asObservable();
  public currentStatus = new BehaviorSubject(this.loggedIn).asObservable();
}
