import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
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
  authenticateUser(data: any): Observable<any> {
    return this.http.post(url + 'authenticateUser', data);
  }
  removeUser(userId: number): Observable<any> {
    return this.http.delete(url + 'removeUser?userId=' + userId);
  }
  retrieveAllUsers(): Observable<any> {
    return this.http.get(url + 'retrieveAllUsers');
  }
  approvePendingEmployee(verificationCode: number): Observable<any> {
    return this.http.put(url + 'approvePendingEmployee?verificationCode=' + verificationCode, null);
  }
  assignPictureToUser(userId: any, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.put(url + 'assignPictureToUser?userId=' + userId, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }
  searchForUsers(input: string): Observable<any> {
    return this.http.get(url + 'searchForUsers?input=' + input);
  }
}
