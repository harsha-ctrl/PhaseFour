import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:9001/Academy/subject";
  }

public getAllSubjects():Observable<Subject[]>{
    return this.http.get<Subject[]>(this.url);
  }

public createSubject(subject:Subject){
  return this.http.post<Subject>(this.url,subject);
}

public getSubjectsById(id:number):Observable<Subject>{
  //return this.http.get<Subject>("http://localhost:9000/project_phase2/subject/"+id);
 
   return this.http.get<Subject>(this.url+"/"+id);
}
public updateSubject(subject:Subject){
  return this.http.patch<Subject>(this.url,subject);
}
public deleteSubject(id:number){
  return this.http.delete<Subject>(this.url+"/"+ id)
}
}
