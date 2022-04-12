import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/SpringMVC/authentication/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  register(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'signUp', data, httpOptions);
  }
  verifyUser(code: string): Observable<any> {
    return this.http.get(AUTH_API + 'confirm/:' + code, httpOptions);
  }
  login(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'logIn', data, httpOptions);
  }
}