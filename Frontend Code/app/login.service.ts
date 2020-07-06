import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string;
  constructor(private http:HttpClient) { 
    this.url="http://localhost:9001/Academy/login";
  }

  public validateLogin(login:Login){
    return this.http.post<Login>(this.url,login);
  }
}