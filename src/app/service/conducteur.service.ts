import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Conducteur} from '../../conducteurModule';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {

  constructor(private http: HttpClient) { }
  public getAllConducteur() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.get(environment.base_url + '/conducteur/show', options);
  }
  public getConducteurById(id) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.get(environment.base_url + '/conducteur/showById' + '/' + id, options);
  }
  public addConducteur(formData: Conducteur) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.post(environment.base_url + '/conducteur/create', formData, options);
  }
  public deleteConducteur(id) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.delete(environment.base_url + '/conducteur/delete' + '/' + id, options);
  }
  public updateConducteur(formData: Conducteur) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.post(environment.base_url + '/conducteur/edit' + '/' + formData.id, formData, options);
  }
}
