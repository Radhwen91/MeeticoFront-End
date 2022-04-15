import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from '../models/picture';
import { Reclamation } from '../models/reclamation';



const url = "api/Reclamation/";
const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})


export class ReclamationService {

  constructor(private http : HttpClient) { }

  getAllReclamationByType(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(url + 'getReclamationByUser', httpOptions);
  }

  getAllReclamationByPriority(priority:String): Observable<any[]> {
    return this.http.get<any>(url + 'type:getReclamationByPriority/'+ priority, httpOptions);
  }

  deleteReclamartionById(id:number){
        return this.http.delete(url+"DeleteReclamation/"+id);
      }
    
  retriveReclamationById(id:number){
return this.http.get<Reclamation>(url+"retrieveReclamation/"+id,httpOptions)

  }

  addReclamation(raclamation:Reclamation/*, picture:Picture*/){
         
         
        return this.http.post<Reclamation>(url+"AddAffectReclamationUser",raclamation);
      }




    // public upload(imagen: File): Observable<any> {
    //   const formData = new FormData();
    //   formData.append('multipartFile', imagen);
    //   return this.http.post<any>(imagenURL+ "upload", formData);
    // }
}
