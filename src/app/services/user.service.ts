import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = "api/user/";
const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }
  retrieveAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(url + 'retrieveAllUsers', httpOptions);
  }

  
}
