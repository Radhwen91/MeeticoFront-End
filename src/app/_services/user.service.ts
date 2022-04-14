import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = "http://localhost:8081/user/";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }
  registerEntrepreneur(data: any): Observable<any> {
    return this.http.post(url + 'registerEntrepreneur', +data);
  }
  approvePendingEmployee(verificationCode: number): Observable<any> {
    return this.http.put(url + 'approvePendingEmployee?verificationCode=' + verificationCode, null);
  }
  authenticateUser(data: any): Observable<any> {
    return this.http.post(url + 'authenticateUser', data);
  }
  removeUser(userId: number): Observable<any> {
    return this.http.delete(url + 'removeUser?userId=' + userId);
  }
  retrieveAllUsers(): Observable<any> {
    return this.http.get(url + 'retrieveAllUsers');
  }
}
