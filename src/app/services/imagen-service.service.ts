import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from '../models/picture';

@Injectable({
  providedIn: 'root'
})
export class ImagenServiceService {

  imagenURL = 'http://localhost:8081/cloudinary';

  constructor(private httpClient: HttpClient) { }

   

  public upload(imagen: File): Observable<any> {

    
    const formData = new FormData();
    formData.append('multipartFile', imagen);
  
    return this.httpClient.post<any>(this.imagenURL + '/upload', formData);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.imagenURL + `/delete/${id}`);
  }
}
