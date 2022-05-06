import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Request } from "../_models/request";
import { User } from "../_models/user";

const url = "http://localhost:8081/request/";

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  constructor(private http: HttpClient) { }
  createRequest(request: Partial<Request>): Observable<Request> {
    return this.http.post<Request>(url + 'createRequest', request);
  }
  updateRequest(requestId: number, updation: Partial<Request>): Observable<Request> {
    return this.http.post<Request>(url + 'updateRequest?requestId=' + requestId, updation);
  }
  deleteRequest(requestId: number): Observable<void> {
    return this.http.delete<void>(url + 'deleteRequest?requestId=' + requestId);
  }
  retrieveAllRequests(userId: number): Observable<Request[]> {
    return this.http.get<Request[]>(url + 'retrieveAllRequests?userId='+ userId);
  }
  assignSenderToRequest(requestId: number, senderId: number): Observable<User> {
    return this.http.put<User>(url + 'assignSenderToRequest?requestId=' + requestId + '&senderId=' + senderId, null);
  }
  searchForRequests(input: string): Observable<Request[]> {
    return this.http.get<Request[]>(url + 'searchForRequests?input=' + input);
  }
}
