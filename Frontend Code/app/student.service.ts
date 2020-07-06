import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:9001/Academy/student";
  }

public getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this.url);
  }

public createStudent(student:Student){
  return this.http.post<Student>(this.url,student);
}

public getStudentsById(id:number):Observable<Student>{
 
   return this.http.get<Student>(this.url+"/"+id);
}
public updateStudent(student:Student){
  return this.http.patch<Student>(this.url,student);
}
public deleteStudent(id:number){
  return this.http.delete<Student>(this.url+"/"+ id)
}
}
