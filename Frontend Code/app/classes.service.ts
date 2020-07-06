import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
import { Classes } from './classes';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private url : string;

  constructor(private http:HttpClient) {
    this.url ="http://localhost:9001/Academy/class";
   }

   public getAllClass() : Observable<Classes[]>{
     return this.http.get<Classes[]>(this.url);
   }

  public createclass(Class : Classes){
    return this.http.post<Classes>(this.url, Class);
  }

  public getClassById(id:number):Observable<Classes>{
    
    return this.http.get<Classes>(this.url+"/"+id);
 }

 public updateClass(Class:Classes){
   return this.http.patch<Classes>(this.url,Class);
 }

 public deleteClass(id:number){
   return this.http.delete<Classes>(this.url+"/"+ id)
 }

public updatestuClass(Class:Classes){
  return this.http.patch<Classes>("http://localhost:9001/Academy/class/student/",Class)
}

public updatesubClass(Class:Classes){
  return this.http.patch<Classes>("http://localhost:9001/Academy/class/subject/",Class)
}

}
