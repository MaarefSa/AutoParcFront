import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Affectation} from '../../Affectation';
import {Conducteur} from '../../conducteurModule';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  constructor(private http: HttpClient) { }

  public getAllaffectation() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.get(environment.base_url + '/affectation/show', options);
  }

  public getAffectationById(id) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.get(environment.base_url + '/affectation/showById' + '/' + id, options);
  }

  addAffectation(formData: Affectation) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.post(environment.base_url + '/affectation/create' , formData, options);
  }
  public deleteAffectation(id) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.delete(environment.base_url + '/affectation/delete' + '/' + id, options);
  }
  public updateAffectation(formData: Affectation) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.post(environment.base_url + '/affectation/edit' + '/' + formData.id, formData, options);
  }
}
