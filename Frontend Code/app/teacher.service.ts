import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Student} from './student';
import { HttpClient } from '@angular/common/http';
import { Teacher } from './teacher';
import {Subject} from './subject';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:9001/Academy/teacher"
  }


public getAllTeacher():Observable<Teacher[]>{
  return this.http.get<Teacher[]>(this.url);
}

public createclass(Teacher:Teacher){
  return this.http.post<Teacher>(this.url,Teacher);
}

public getTeacherById(id:number):Observable<Teacher>{
  
   return this.http.get<Teacher>(this.url+"/"+id);
}

public updateTeacher(Teacher:Teacher){
  return this.http.patch<Teacher>(this.url,Teacher);
}

public deleteTeacher(id:number){
  return this.http.delete<Teacher>(this.url+"/"+ id)
}

public updatestuTeacher(Teacher:Teacher){
 return this.http.patch<Teacher>("http://localhost:9001/Academy/teacher/student/",Teacher)
}

public updatesubTeacher(Teacher: Teacher){
  return this.http.patch<Teacher>("http://localhost:9001/Academy/teacher/subject/",Teacher)
}
}
