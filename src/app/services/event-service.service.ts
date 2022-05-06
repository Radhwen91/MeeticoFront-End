import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eventt } from '../models/Eventt';
import { FileDB } from '../models/fileDB';
import { User } from '../models/user';
import { userr } from '../models/userr';


@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  addUrl:string='api/event/add-event'
  getallurl:string='api/event/all-Events'
  deleteUrl="api/event/RemoveEvent/";
  updateUrl="api/event/update-event/"
  getByIdUrl="api/event/get-event-byId/"
  statUrl=("api/event/stat/")
  participateUrl="api/event/add-user-to-event/"
  userPerEventUrl="api/event/my-Events"
  getMyUserUrl="api/event/get-all-users/"
  deleteUserUrl="api/event/remove-user-from-event/"


  uploadfilef="api/event/File/uploadf";
  getfile="api/event/File/files/";
  affectFileUrl="api/event/affecter-fileToEvent/"
  filesdetailUrl="api/event/File/filesdetail/"
  deletefilesUrl="api/event/File/delete-file";
  addWithImage = "api/event/addI/"

  constructor(private http:HttpClient) { }
  
  
  
  
  addEvent(event:Eventt){
    return this.http.post<Event>(this.addUrl,event) ;
  }

  addEventWithImage(fd : FormData) : Observable<any> {
    return this.http.post(this.addWithImage,fd);
  }

  getAll():Observable<Eventt[]>{
    return this.http.get<Eventt[]>(this.getallurl)
  }

  deleteEventt(id:any){
    return this.http.delete<Eventt>(this.deleteUrl+id);
  }
  putEvent(event:Eventt){
    return this.http.put(this.updateUrl,event);
  }
statEvent (id:any)  {
  return this.http.get(this.statUrl+id)
}
getById(id:any):Observable<Eventt[]>{
  return this.http.get<Eventt[]>(this.getByIdUrl+id)
}
partcipateUser(id:any){
return this.http.post<Eventt[]>(this.participateUrl+id,{})
}

userPerEvent(){
  return this.http.get<Eventt[]>(this.userPerEventUrl)
}
getMyUser(id:any):Observable<User[]>{
  return this.http.get<User[]>(this.getMyUserUrl+id)
}
deleteUserS(idUser:any , eventId : any){
  return this.http.delete<User>(this.deleteUserUrl+idUser+"/"+eventId,{});



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

getFiles(id:Number): Observable<FileDB[]> {
  return this.http.get<FileDB[]>(`${this.getfile}/${id}`);
}


affecterfile(id:Number,idf:number,file :FileDB):Observable<FileDB>{
  return this.http.put<FileDB>("api/event/affecter-fileToEvent/"+id+"/"+idf,file);
}
getFilesdetail(id:number): Observable<FileDB> {
  return this.http.get<FileDB>(`${this.filesdetailUrl}/${id}`);
}

deletefile(id:Number): any{
  return this.http.delete(`${this.deletefilesUrl}/${id}`);
}

}




