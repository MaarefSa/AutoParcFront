import { Component, OnInit } from '@angular/core';
import {AffectationService} from '../service/affectation.service';
import {Affectation} from '../../Affectation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Conducteur} from '../../conducteurModule';
import {VehiculeService} from '../service/vehicule.service';
import {ConducteurService} from '../service/conducteur.service';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {
  affectations ;
  addForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  error ='';
  vehicules;
  conducteurs;
  constructor(private router: Router, private affectationService: AffectationService, private formBuilder: FormBuilder, private vehiculeService: VehiculeService, private conducteurService:ConducteurService) { }

  ngOnInit() {
  this.getAll();
    this.addForm = this.formBuilder.group({
      id: [],
      codeMission: ['', Validators.required],
      debutAffect: ['', Validators.required],
      finAffectPrevue: ['', Validators.required],
      finAffectReelle: ['', Validators.required],
      direction: ['', Validators.required],
      adresse: ['', Validators.required],
      vehicule: [],
      chauffeur: []
    });
    this.editForm = this.formBuilder.group({
      id: [],
      codeMission: ['', Validators.required],
      debutAffect: ['', Validators.required],
      finAffectPrevue: ['', Validators.required],
      finAffectReelle: ['', Validators.required],
      direction: ['', Validators.required],
      adresse: ['', Validators.required],
      vehicule: [],
      chauffeur: []
    });
  }

  getAll() {
    this.affectationService.getAllaffectation().subscribe(res => {
      console.log(res);
      this.affectations = res ;
      this.vehiculeService.getAllVehicules().subscribe(data => {
        console.log(data);
        this.vehicules = data ;
      });
      this.conducteurService.getAllConducteur().subscribe(result => {
        console.log(result);
        this.conducteurs = result ;
      });
    });
  }
  deleteAffect(affectation: Affectation) {
    this.affectationService.deleteAffectation(affectation.id).subscribe(res => {
      console.log(res);
      this.getAll();
    });
   // location.reload();
  }
  updateAffectation(affectation: Affectation) {
    localStorage.removeItem('affectationId');
    localStorage.setItem('affectationId' , affectation.id);
    //appel constructeur of new conucteur
    const affectId = localStorage.getItem('affectationId');
    if (!affectId) {
      alert('wrong id affectation');
      this.router.navigate(['home/affectation']);
      return;
    }
    this.affectationService.getAffectationById(affectId).subscribe(data => {
      console.log(data);
      this.editForm.patchValue(data);
    });

    //this.router.navigate(['home/edit-conducteur']);
  }
  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.affectationService.addAffectation(this.addForm.value).subscribe(res => {
        console.log(res);
        window.location.reload();
      },(error)=>{
        this.error=error;
        alert('Mission already exists')
      });
      //this.getAll();
    }
  }
  onSubmit1() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.affectationService.updateAffectation(this.editForm.value)
        .subscribe(data => {
          console.log(data);
          //this.router.navigate(['home/conducteur']);
        });
      location.reload();
    }
  }
  get f() { return this.addForm.controls; }
  get f1() { return this.editForm.controls; }
}
