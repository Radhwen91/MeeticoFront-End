import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { UserDetails } from "../models/user-details";

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
  updateProfile(user: User): Observable<User> {
    return this.http.put<User>(url + 'updateProfile', user);
  }
  removeUser(userId: number): Observable<void> {
    return this.http.delete<void>(url + 'removeUser?userId=' + userId);
  }
  retrieveAllUsers(descendant: boolean, sortedBy: string): Observable<User[]> {
    return this.http.get<User[]>(url + 'retrieveAllUsers?descendant=' + descendant + '&sortedBy=' + sortedBy);
  }
  approvePendingEmployee(verificationCode: number): Observable<User> {
    return this.http.put<User>(url + 'approvePendingEmployee?verificationCode=' + verificationCode, null);
  }
  assignPictureToUser(userId: number, picture: FormData): Observable<User> {
    return this.http.put<User>(url + 'assignPictureToUser?userId=' + userId, picture);
  }
  uploadConvertablePDF(PDF: FormData): Observable<string> {
    return this.http.post<string>(url + 'uploadConvertablePDF', PDF);
  }
  searchForUsers(input: string): Observable<User[]> {
    return this.http.get<User[]>(url + 'searchForUsers?input=' + input);
  }
  signInStatus(userId: number): Observable<void> {
    return this.http.put<void>(url + 'signInStatus?userId=' + userId, null);
  }
  signOutStatus(userId: number): Observable<void> {
    return this.http.put<void>(url + 'signOutStatus?userId=' + userId, null);
  }
  followUser(followerId: number, userId: number): Observable<void> {
    return this.http.put<void>(url + 'followUser?followerId=' + followerId + '&userId=' + userId, null);
  }
  unfollowUser(followerId: number, userId: number): Observable<void> {
    return this.http.put<void>(url + 'unfollowUser?followerId=' + followerId + '&userId=' + userId, null);
  }
  retrieveUserFollowers(userId: number): Observable<User[]> {
    return this.http.get<User[]>(url + 'retrieveUserFollowers?userId=' + userId);
  }
  calculateProfileCompletion(): Observable<number[]> {
    return this.http.get<number[]>(url + 'calculateProfileCompletion');
  }
  accountStatistics(): Observable<object[]> {
    return this.http.get<object[]>(url + 'accountStatistics');
  }
}
