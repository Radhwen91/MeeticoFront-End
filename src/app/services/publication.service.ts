import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Publication} from '../models/publication';
import {Router} from '@angular/router';
import {PostLike} from '../models/PostLike';
import {Comment} from '../models/comment';
import {FileDB} from '../models/fileDB';



const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  url="/api/publication/GetPublicationToday";
  urldelete="/api/publication/supprimer-publication";
  urlpdf="/api/pdf/pdf";
  urladd="/api/publication/add-publication";
  urladdislike="/api/publication/addDislike";
  urladdlike="/api/publication/addLike";
  urlLike="/api/publication/nbrLike";
  urldisLike="/api/publication/nbrDisLike";
  nbrComments="/api/publication/nbrComments";
  badword="/api/publication/badword";
//urladdcomment="/api/comment/testaddcomment";
  urladdcomment="/api/comment/add-comment";
  uploadfile="/api//File/upload";
  uploadgetImg="/api/File/ajoutimage";
  getFile="/api/File/getFile2";
  affecterimage="/api/File/affecterimage";

  updateurl="/api/publication/update";
  listcomments="/api/comment/ListCommentsByPub";
  deletecomment="/api/comment/DeleteCommentaire";
  nbrAlerts="/api/publication/nbralerts";
  nbrAlertsban="/api/publication/nbralertsban";
  findAlerts="/api/publication/GetAlerts";
  findBannedusers="/api/publication/getBannedUsers";
  Deblokuser="/api/publication/autoriserUser";
  deleteAlerts="/api/publication/supprimer-alert";
  constructor(private http: HttpClient) { }
  deleteAlert(id:number) : any{
    return this.http.delete(`${this.deleteAlerts}/${id}`)
  }
  getAlerts() : Observable<any>{
    return this.http.get<any>(this.findAlerts);

  }

  bannedUsers() : Observable<any>{
    return this.http.get<any>(this.findBannedusers);

  }

  debloqueruser(id:number) : any{
    return this.http.get(`${this.Deblokuser}/${id}`)

  }

  /*
    ListComments(id) : Observable<any>{
      return this.http.get<Comment>(`${this.listcomments}/${id}`);

    }
    */
  getNbrAlerts() : Observable<any>{
    return this.http.get(this.nbrAlerts)

  }
  getNbrAlertsban() : Observable<any>{
    return this.http.get(this.nbrAlertsban)

  }
  deleteComment(id:number) : any{
    return this.http.delete(`${this.deletecomment}/${id}`)
  }
  ListComments(id: number):Observable<any> {
    return this.http.get<Comment[]>(`${this.listcomments}/${id}`,httpOptions);
    // return this.http.get<Comment>(this.listcomments + id)
  }

  updatePublication(publication:Publication){
    return this.http.put<Publication>(this.updateurl,publication);

    // return this.http.put<Publication> (`${this.updateurl}/${id}`,publication);
  }

  affecter(id:number,idf:number){
    return this.http.put<FileDB>("http://localhost:8081/File/affecterimage/"+idf+"/"+id,{responseType:'json'});
  }
  getFile2(id:number):Observable<FileDB>{
    return this.http.get<FileDB>(`${this.getFile}/${id}`);
  }
  /*
    getCommentNB():Observable<Comment[]>{
      return this.Commenthttp.get<Comment[]>(this.NbcommentURL);
    }*/
  getNbrLike(id:number) : Observable<any>{
    return this.http.get(`${this.urlLike}/${id}`)

  }
  BadWords(id:String) : Observable<any>{
    return this.http.get(`${this.badword}/${id}`)

  }
  getNbrDislike(id:number) : Observable<any>{
    return this.http.get(`${this.urldisLike}/${id}`)

  }
  getNbrComments(id:number) : Observable<any>{
    return this.http.get(`${this.nbrComments}/${id}`)

  }
  addLike(like:PostLike,id:number) : Observable<PostLike>{

    return this.http.put<PostLike>(`${this.urladdlike}/${id}`,like);

  }
  addDislike(like:PostLike,id:number) : Observable<PostLike>{

    return this.http.put<PostLike>(`${this.urladdislike}/${id}`,like);

  }

  addPublication(publication:Publication):Observable<Publication>{

    return this.http.post<Publication>(this.urladd,publication);


  }

  addImage(file:FileDB):Observable<FileDB>{
    return this.http.post<FileDB>(this.uploadfile,file);

  }
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `${this.uploadgetImg}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  addComment2(comment :Comment,id:number): Observable<Comment>{
    return this.http.post<Comment>(`${this.urladdcomment}/${id}`,comment);
  }





  addComment(comment:Comment):Observable<Comment>{
    return this.http.post<Comment>(this.urladdcomment,comment);

  }










  getPubToday() : Observable<any>{
    return this.http.get<any>(this.url);

  }

  deletePub(id:number) : any{
    return this.http.delete(`${this.urldelete}/${id}`)
  }

  Pdf(){
    return this.http.get(this.urlpdf);
  }


}
