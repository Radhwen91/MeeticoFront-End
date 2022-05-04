import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from '../models/picture';

@Injectable({
  providedIn: 'root'
})
export class ImagenServiceService {

  imagenURL = "http://localhost:8081/cloudinary/upload";
  getfiledetail="http://localhost:8081/cloudinary/getPicture"

  constructor(private httpClient: HttpClient) { }

   

  public  upload(imagen: File): Observable<any> {

    
    const formData = new FormData();
    formData.append('multipartFile', imagen);
  
    return this.httpClient.post<any>(this.imagenURL , formData);
  }


  upload2(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.imagenURL}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
   
    return this.httpClient.request(req);   
  }

  getFilesdetail(id:number): Observable<Picture> {
    return this.httpClient.get<Picture>(`${this.getfiledetail}/${id}`);

  
}
}
