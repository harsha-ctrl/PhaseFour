import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from './registration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:9001/Academy/registration";
  }

  public getAllUser():Observable<Registration[]>{
    return this.http.get<Registration[]>(this.url);
  }

  public createRegistration(register:Registration){
    return this.http.post<Registration>(this.url,register);
  }

  public deleteUser(id:number){
    return this.http.delete<Registration>(this.url+"/"+ id)
  }


}

