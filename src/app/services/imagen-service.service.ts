import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from '../models/picture';
const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class ImagenServiceService {

  imagenURL = "http://localhost:8081/cloudinary/upload";
  getfiledetail="http://localhost:8081/cloudinary/getPicture"
 
  constructor(private httpClient: HttpClient) { }

   

  public  upload(imagen: File): Observable<any> {
    let username='zied'
    let password='ziedpidev'
    
    const formData = new FormData();
    formData.append('multipartFile', imagen);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    return this.httpClient.post<any>(this.imagenURL,formData , {headers});
  }


  getFilesdetail(id:number): Observable<Picture> {
    return this.httpClient.get<Picture>(`${this.getfiledetail}/${id}`);

  
}
}
