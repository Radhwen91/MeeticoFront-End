import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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


  getFilesdetail(id:number): Observable<any> {
    let username='zied'
    let password='ziedpidev'
 
    // let httpParams = new HttpParams().set('answer', username).set('question', password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   
    return this.httpClient.get<any>(`${this.getfiledetail}/${id}`,{headers:headers});

  
}

// getFactoriesByOwner(owner_id: string) {
//   let httpParams = new HttpParams()
//     .set('owner_id', owner_id)
//   console.log(httpParams.toString());
//   return this.httpClient.get(this.urlFactory + "factories/", { params: httpParams, responseType: 'json' });
// }
}
