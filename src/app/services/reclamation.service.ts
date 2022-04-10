import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/reclamation';



const url = "api/Reclamation/";
const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})


export class ReclamationService {

  constructor(private http : HttpClient) { }

  getAllReclamationByType(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(url + 'getReclamationByType/OTHER', httpOptions);
  }
}
