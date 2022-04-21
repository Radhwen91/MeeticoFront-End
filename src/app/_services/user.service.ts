import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../_models/user";
import { UserDetails } from "../_utils/user-details";

const url = "http://localhost:8081/user/";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }
  registerEntrepreneur(entrepreneur: Partial<User>): Observable<User> {
    return this.http.post<User>(url + 'registerEntrepreneur', entrepreneur);
  }
  authenticateUser(credentials: Partial<User>): Observable<UserDetails> {
    return this.http.post<UserDetails>(url + 'authenticateUser', credentials);
  }
  updateProfile(userId: number, updation: Partial<User>): Observable<User> {
    return this.http.put<User>(url + 'updateProfile?userId=' + userId, updation);
  }
  removeUser(userId: number): Observable<void> {
    return this.http.delete<void>(url + 'removeUser?userId=' + userId);
  }
  retrieveAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(url + 'retrieveAllUsers');
  }
  approvePendingEmployee(verificationCode: number): Observable<User> {
    return this.http.put<User>(url + 'approvePendingEmployee?verificationCode=' + verificationCode, null);
  }
  assignPictureToUser(userId: number, picture: FormData): Observable<User> {
    return this.http.put<User>(url + 'assignPictureToUser?userId=' + userId, picture);
  }
  searchForUsers(input: string): Observable<User[]> {
    return this.http.get<User[]>(url + 'searchForUsers?input=' + input);
  }
}
