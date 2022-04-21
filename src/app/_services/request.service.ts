import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Request } from "../_models/request";

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
    return this.http.delete<void>(url + 'removeRequest?requestId=' + requestId);
  }
  retrieveAllRequests(userId: number): Observable<Request[]> {
    return this.http.get<Request[]>(url + 'retrieveAllRequests');
  }
  assignSenderToRequest(senderId: number, requestId: number): Observable<Request> {
    return this.http.put<Request>(url + 'assignPictureToRequest?requestId=' + requestId, senderId);
  }
  searchForRequests(input: string): Observable<Request[]> {
    return this.http.get<Request[]>(url + 'searchForRequests?input=' + input);
  }
}
