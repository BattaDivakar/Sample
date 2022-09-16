import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  _loginUrl = "http://localhost:48357/api/login/login-user";
  _registerUrl = "http://localhost:48357/api/register-user"
  constructor(private http:HttpClient) { }
  loginUser(login:any)
  {
    return this.http.post<any>(this._loginUrl, login);
  }
  gettoken(){
    return localStorage.getItem('token');
  }
}
