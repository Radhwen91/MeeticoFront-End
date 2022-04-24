import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private loggedIn: boolean = false;
  public currentStatus = new BehaviorSubject(this.loggedIn).asObservable();
  private clicked: boolean = false;
  public currentBehavior = new BehaviorSubject(this.clicked).asObservable();
}
