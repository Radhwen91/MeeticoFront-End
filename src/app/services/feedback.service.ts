import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback';
import { Trip } from '../models/trip';
//import * as moment from 'moment';



const url = "api/Feedback/";
  const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  
  
  constructor(private http : HttpClient) { }


  addFeedback(feedback:Feedback){
  return this.http.post<Feedback>(url+"AddAffectFeedbackUsers"/*+us+"/"+iduser*/,feedback);
      } 



    getAllfeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(url + 'getFeedbackByClient', httpOptions);
    }




    deleteFeedbackById(id:number){
    return this.http.delete(url+"DeleteFeedback/"+id);
        }

      statPercentageFeedbacksByStars(): Observable<any[]>{
      return this.http.get<any[]>(url + 'Statistique', httpOptions);
      }

      updateFeedback(feedback:Feedback){
      return this.http.put<Feedback>(url+"updateFeedback",feedback);
  }

  getAllTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>("http://localhost:8081/Trip/get-trip", httpOptions);
    }

   
  
}
