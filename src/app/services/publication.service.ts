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
  urladdlike="/api/publication/addLike";
  urlLike="/api/publication/nbrLike";
//urladdcomment="/api/comment/testaddcomment";
  urladdcomment="/api/comment/add-comment";
  uploadfile="/api//File/upload";
  uploadgetImg="/api/File/ajoutimage";
  getFile="/api/File/getFile2";
  affecterimage="/api/File/affecterimage";

  updateurl="/api/publication/update";
  listcomments="/api/comment/ListCommentsByPub";
  deletecomment="/api/comment/DeleteCommentaire";
  constructor(private http: HttpClient) { }

  /*
    ListComments(id) : Observable<any>{
      return this.http.get<Comment>(`${this.listcomments}/${id}`);

    }
    */
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
  addLike(like:PostLike,id:number) : Observable<PostLike>{

    return this.http.put<PostLike>(`${this.urladdlike}/${id}`,like);


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
