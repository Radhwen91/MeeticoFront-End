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

  addReclamation(reclamation:Reclamation/*, picture:Picture*/){
         
         
        return this.http.post<Reclamation>(url+"AddAffectReclamationUser",reclamation);
      }

  updateReclamation(raclamation:Reclamation){
    return this.http.put<Reclamation>(url+"UpdateReclamation",raclamation);
  }

  
  answerAdmin(reclamation:Reclamation){
    return this.http.put<Reclamation>(url+"answerAdmin",reclamation);
  }
  verifBySendingEmail(reclamation:Reclamation){
    return this.http.put<Reclamation>(url+"SendMailReclamation/"+reclamation.idReclamation,reclamation);
  }
  statWatingReclamation(){
    return this.http.get<any>(url + 'statWatingReclamation', httpOptions);
  }
  
  statReclamationByPriority(priority:String){
    return this.http.get<any>(url + 'statWatingReclamationByPriority/'+priority, httpOptions);
  }
  statReclamationByType(type:String){
    return this.http.get<any>(url + 'statWatingReclamationByType/'+type, httpOptions);
  }
  statReclamationByTypeAndPriority(priority:String,type:String){
    return this.http.get<any>(url + 'statWatingReclamationbytypeandpriority/'+type+'/'+priority, httpOptions);
  }


    // public upload(imagen: File): Observable<any> {
    //   const formData = new FormData();
    //   formData.append('multipartFile', imagen);
    //   return this.http.post<any>(imagenURL+ "upload", formData);
    // }
}
