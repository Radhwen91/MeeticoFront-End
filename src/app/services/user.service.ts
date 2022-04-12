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
    return this.http.post(url + 'registerEntrepreneur', data);
  }
  verifyUser(code: string): Observable<any> {
    return this.http.get(url + 'verifyUser' + code);
  }
  authenticateUser(data: any): Observable<any> {
    return this.http.post(url + 'authenticateUser', data);
  }
  removeUser(userId: any): Observable<any> {
    return this.http.delete(url + 'removeUser/' + userId);
  }
}
