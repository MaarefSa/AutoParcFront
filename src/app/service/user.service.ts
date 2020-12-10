import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Vehicule} from '../../vehiculeModule';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  login(username, password) {

    return this.http.post(environment.user_url + '/login_check',{"username": username, "password": password});
  }

  register(username, password, role) {

    return this.http.post(environment.user_url + '/register', {"username": username, "password": password, "role": role});
  }
  api() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.get( environment.user_url + '/api', options);
  }

  public isAuthentificated(): boolean {
    return this.getToken() !== null ;
  }
  public storeToken(token: string) {
    localStorage.setItem("token", token);
  }
  public getToken() {
    return localStorage.getItem("token");
  }
}
