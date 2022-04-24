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
  retrieveAllUsers(): Observable<any> {
    return this.http.get<any>(url + 'retrieveAllUsers', httpOptions);
  }

  
}
