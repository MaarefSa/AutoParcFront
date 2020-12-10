import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConducteurService} from '../../service/conducteur.service';
import {VehiculeService} from '../../service/vehicule.service';
import {AffectationService} from '../../service/affectation.service';
import {ConsommationService} from '../../service/consommation.service';
import {log} from 'util';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public conducteurs;
  public vehicules;
  public affectations;
  public consommations;
  public idcond;
  constructor(private router: Router, private conducteurService: ConducteurService, private vehiculeService: VehiculeService, private affectationService: AffectationService, private consommationService: ConsommationService) { }

  ngOnInit() {
    this.getAll();
    this.getAllM();
    this.getAllC();
    this.getAllV();

  }

  getAll() {
    this.conducteurService.getAllConducteur().subscribe(res => {
      console.log(res);
      this.conducteurs = res ;
    });
  }
  getAllM() {
    this.affectationService.getAllaffectation().subscribe(res => {
      console.log(res);
      this.affectations = res;
    });
  }
  getAllC() {
    this.consommationService.getAll().subscribe(res => {
      console.log(res);
      this.consommations = res;
    });
  }
  getAllV() {
    this.vehiculeService.getAllVehicules().subscribe(res => {
      console.log(res);
      this.vehicules = res;

    });
  }
}
