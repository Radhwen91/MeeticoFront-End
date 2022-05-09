import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Trip } from 'src/app/models/trip';
import { Observable } from 'rxjs';
import { FileDB } from 'src/app/models/fileDB';
import { User } from 'src/app/models/user';
import { DestionationVisitorsCount } from 'src/app/models/destionationVisitorsCount';
import {FileDBTrip} from "../../models/FileDBTrip";



const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class TripService {

  tripsUrl="/api/Trip/get-trip";
  usersUrl="/api/user/retrieveAllUsers"
  addtripsUrl="/api/Trip/ajouttrip";
  deletetripsUrl="/api/Trip/delete-trip";
  gettripsUrl="/api/Trip/get-trip";
  updatetripsUrl="/api/Trip/update-trip";
  pdfbytrip="/api/Trip/trip-to-pdf";
  uploadfile="/api/FileTrip/upload";
  uploadfilef="/api/FileTrip/uploadf";
  getfile="/api/FileTrip/filesdevoyage";
  affecterfile="/api/Trip/affecter-fileToTrip";
  affecterusertrip="/api/Trip/affecter-utilisateur";
  algmatching="/api/Trip/get-utilisateur-by-matching";
  getfiledetail="/api/FileTrip/filesdetail";
  deletefiles="/api/FileTrip/delete-file";
  stat="/api/Trip/get-DestionationVisitorsCount";
  sattm="/api/Trip/meilleur-destination";
  gettripbyfile="/api/FileTrip/filebytrip";
  gettripbydestinationurl="/api/Trip/get-trip-by-destination";
  constructor(private http : HttpClient) { }

  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsUrl);
    }
  gettripbydestination(destination:String) : Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.gettripbydestinationurl}/${destination}`);
  }
    getTripbyFile(id:number) : Observable<Trip> {
      return this.http.get<Trip>(`${this.gettripbyfile}/${id}`);
      }
    getDestionationVisitCount() : Observable<DestionationVisitorsCount[]> {
      return this.http.get<DestionationVisitorsCount[]>(this.stat);
      }
      getmeiulleurdestination()  {
        return this.http.get(`${this.sattm}`,{ responseType: 'text' });
      }
    getUserss() : Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl);
      }
      getUserssbymatching(destination:String,startdate:Date,city:String) : Observable<User[]> {
        return this.http.get<User[]>("/api/Trip/get-utilisateur-by-matching/"+destination+"/"+startdate
        +"/"+city);
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
  getpdfbytrip(id:number) :Observable<any> {
    return this.http.get(`${this.pdfbytrip}/${id}`);
    }
    upload(file: File): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();
      formData.append('file', file);
      const req = new HttpRequest('POST', `${this.uploadfilef}`, formData, {
        reportProgress: true,
        responseType: 'json'
      });

      return this.http.request(req);
    }
      /*
      upload(file: File): Observable<number> {
        const formData: FormData = new FormData();
        formData.append('file', file);
        var a= this.http.post<number>(`${this.uploadfilef}`,formData);
        console.log(a)
        return a;
      }*/

    getFiles(id:Number): Observable<FileDBTrip> {
      return this.http.get<FileDBTrip>(`${this.getfile}/${id}`);
    }
    getFilesdetail(id:number): Observable<FileDBTrip> {
      return this.http.get<FileDBTrip>(`${this.getfiledetail}/${id}`);
    }
    affecterfileauvoyage(id:Number,idf:number,trip :Trip):Observable<Trip>{
      return this.http.put<Trip>("/api/Trip/affecter-fileToTrip/"+id+"/"+idf,trip);
    }
    deletefile(id:Number): any{
      return this.http.delete(`${this.deletefiles}/${id}`);
    }
    affectusertrip(id:number,idu :number,trip :Trip): Observable<Trip>{
      return this.http.put<Trip>("/api/Trip/affecter-utilisateur/"+id+"/"+idu,trip);
    }
    desaffeteraffectusertrip(id:number,idu :number,trip :Trip): Observable<Trip>{
      return this.http.put<Trip>("/api/Trip/delete-user-from-trip/"+id+"/"+idu,trip);
    }

}
