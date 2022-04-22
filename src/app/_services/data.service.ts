import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../_models/user';

@Injectable()

export class DataService {
  private user: User = null;
  private userSource = new BehaviorSubject(this.user);
  currentUser = this.userSource.asObservable();
  changeUser(user: User) {
    this.userSource.next(user)
  }
}