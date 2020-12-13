import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {FormGroup} from '@angular/forms';
import {Vehicule} from '../../vehiculeModule';


@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  public formData: Vehicule;


  constructor(private http: HttpClient) { }



  getAllVehicules() {

    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.get<Vehicule[]>(environment.base2_url+ '/vehicules', options);
  }

  getVehiculeById(id) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.get<Vehicule>(environment.base2_url + '/vehicules' + '/' + id, options);
  }
  updateVehicule(formData: Vehicule) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.put(environment.base2_url + '/vehicules' + '/' + formData.id, formData, options);

  }
  public removeVehicules(id) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };

    return this.http.delete(environment.base2_url + '/vehicules' + '/' + id, options);
  }
  public addVehicule(formData: Vehicule) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.post(environment.base2_url + '/vehicules', formData, options);
  }

  /*

    public getAllVehicules() {
      const token = localStorage.getItem('token');

      const headers = new HttpHeaders({
        "Content-type": "application/json",
        "Authorization": 'Bearer ' + localStorage.getItem("token"),
      });
      const options = { headers : headers };

      return this.http.get(environment.base_url + '/vehicule/show', options);
    }
    getVehiculeById(id) {
      const token = localStorage.getItem('token');

      const headers = new HttpHeaders({
        "Content-type": "application/json",
        "Authorization": 'Bearer ' + localStorage.getItem("token"),
      });
      const options = { headers : headers };
      return this.http.get<Vehicule>(environment.base_url + '/vehicule/showById' + '/' + id, options);
    }
    updateVehicule(formData: Vehicule) {
      const token = localStorage.getItem('token');

      const headers = new HttpHeaders({
        "Content-type": "application/json",
        "Authorization": 'Bearer ' + localStorage.getItem("token"),
      });
      const options = { headers : headers };
      return this.http.post(environment.base_url + '/vehicule/edit' + '/' + formData.id, formData, options);

    }
  public removeVehicules(id) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };

    return this.http.delete(environment.base_url + '/vehicule/delete' + '/' + id, options);
  }
  public addVehicule(formData: Vehicule) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + localStorage.getItem("token"),
    });
    const options = { headers : headers };
    return this.http.post(environment.base_url + '/vehicule/create', formData, options);
  }
    */







}
