import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Trip } from 'src/app/models/trip';
import { Observable } from 'rxjs';
import { FileDB } from 'src/app/models/fileDB';
import { User } from 'src/app/models/user';



const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class TripService {

  tripsUrl="http://localhost:8089/SpringMVC/Trip/get-trip";
  usersUrl="http://localhost:8089/SpringMVC/user/retrieveAllUsers"
  addtripsUrl="http://localhost:8089/SpringMVC/Trip/ajouttrip";
  deletetripsUrl="http://localhost:8089/SpringMVC/Trip/delete-trip";
  gettripsUrl="http://localhost:8089/SpringMVC/Trip/get-trip";
  updatetripsUrl="http://localhost:8089/SpringMVC/Trip/update-trip";
  pdfbytrip="http://localhost:8089/SpringMVC/Trip/trip-to-pdf";
  uploadfile="http://localhost:8089/SpringMVC/File/upload";
  uploadfilef="http://localhost:8089/SpringMVC/File/uploadf";
  getfile="http://localhost:8089/SpringMVC/File/filesdevoyage";
  affecterfile="http://localhost:8089/SpringMVC/Trip/affecter-fileToTrip";
  affecterusertrip="http://localhost:8089/SpringMVC/Trip/affecter-utilisateur";
  algmatching="http://localhost:8089/SpringMVC/Trip/get-utilisateur-by-matching";
  getfiledetail="http://localhost:8089/SpringMVC/File/filesdetail"
  constructor(private http : HttpClient) { }
  
  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.tripsUrl);
    }
    getUserss() : Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl);
      }
      getUserssbymatching(destination:String,startdate:Date,city:String) : Observable<User[]> {
        return this.http.get<User[]>("http://localhost:8089/SpringMVC/Trip/get-utilisateur-by-matching/"+destination+"/"+startdate
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

    getFiles(id:number): Observable<FileDB[]> {
      return this.http.get<FileDB[]>(`${this.getfile}/${id}`);
    }
    getFilesdetail(id:number): Observable<FileDB> {
      return this.http.get<FileDB>(`${this.getfiledetail}/${id}`);
    }
    affecterfileauvoyage(id:number,idf:number,file :FileDB):Observable<FileDB>{
      return this.http.put<FileDB>("http://localhost:8089/SpringMVC/Trip/affecter-fileToTrip/"+id+"/"+idf,file);
    }
    affectusertrip(id:number,idu :number,trip :Trip): Observable<Trip>{
      return this.http.put<Trip>("http://localhost:8089/SpringMVC/Trip/affecter-utilisateur/"+id+"/"+idu,trip);
    }
    desaffeteraffectusertrip(id:number,idu :number,trip :Trip): Observable<Trip>{
      return this.http.put<Trip>("http://localhost:8089/SpringMVC/Trip/delete-user-from-trip/"+id+"/"+idu,trip);
    }
    
}
