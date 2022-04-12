import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trip } from 'src/app/models/trip';
import { Observable } from 'rxjs';
import { FileDB } from 'src/app/models/fileDB';



const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class TripService {

  tripsUrl="http://localhost:8089/SpringMVC/Trip/get-trip";
  addtripsUrl="http://localhost:8089/SpringMVC/Trip/ajouttrip";
  deletetripsUrl="http://localhost:8089/SpringMVC/Trip/delete-trip";
  gettripsUrl="http://localhost:8089/SpringMVC/Trip/get-trip";
  updatetripsUrl="http://localhost:8089/SpringMVC/Trip/update-trip";
  pdfbytrip="http://localhost:8089/SpringMVC/Trip/trip-to-pdf"
  constructor(private http : HttpClient) { }

  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsUrl);
    }
  ajoutTrip(trip :Trip,id:number): Observable<Trip>{
    return this.http.post<Trip>(`${this.addtripsUrl}/${id}`,trip);
  }
  deleteTrip(id:number): any{
    return this.http.delete(`${this.deletetripsUrl}/${id}`);
  }
  getTrip(id:number): Observable<Trip>{
    return this.http.get<Trip>(`${this.gettripsUrl}/${id}`);
  
  }
  updateTrip(id:number,trip :Trip): Observable<Trip>{
    return this.http.put<Trip>(`${this.updatetripsUrl}/${id}`,trip);
  }
  getpdfbytrip(id:number)  {
    return this.http.get<FileDB>(`${this.pdfbytrip}/${id}`);
    }
}
