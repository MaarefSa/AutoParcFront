import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Consommation} from '../../Consommation';
import {Conducteur} from '../../conducteurModule';

@Injectable({
  providedIn: 'root'
})
export class ConsommationService {

  constructor(private http: HttpClient) { }

  getAll() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.get(environment.base_url + '/consommation/show', options);
  }

  public getConsommationById(id) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.get(environment.base_url + '/consommation/showById' + '/' + id, options);
  }
  addConsommation(formData: Consommation) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.post(environment.base_url + '/consommation/create' , formData, options);
  }
  public removeConsommation(id) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };

    return this.http.delete(environment.base_url + '/consommation/delete' + '/' + id, options);
  }
  public updateConsommation(formData: Consommation) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.post(environment.base_url + '/consommation/edit' + '/' + formData.id, formData, options);
  }
}
