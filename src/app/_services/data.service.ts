import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private loggedIn: boolean = false;
  public currentStatus = new BehaviorSubject(this.loggedIn).asObservable();
  public setItem(key: string, value: number): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public getItem(key: string): string | null {
    return localStorage.getItem(key);
  }
  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
