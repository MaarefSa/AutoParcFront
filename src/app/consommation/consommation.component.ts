import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConsommationService} from '../service/consommation.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Affectation} from '../../Affectation';
import {AffectationService} from '../service/affectation.service';
import {Consommation} from '../../Consommation';
import {Vehicule} from '../../vehiculeModule';

@Component({
  selector: 'app-consommation',
  templateUrl: './consommation.component.html',
  styleUrls: ['./consommation.component.css']
})
export class ConsommationComponent implements OnInit {

  consommations;
  affectations: Affectation;
  constructor(private router: Router, private consommationService: ConsommationService, private formBuilder: FormBuilder, private affectationService: AffectationService) { }
  addForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  error ='';

  ngOnInit() {
    this.getAllConsommation();

    this.addForm = this.formBuilder.group({
      id: [],
      reference: ['', Validators.required],
      carburant: ['', Validators.required],
      huile: ['', Validators.required],
      fixe: ['', Validators.required],
      divers: ['', Validators.required],
      affectation: []
    });
    this.editForm = this.formBuilder.group({
      id: [],
      reference: ['', Validators.required],
      carburant: ['', Validators.required],
      huile: ['', Validators.required],
      fixe: ['', Validators.required],
      divers: ['', Validators.required],
      affectation: []
    });
  }
  getAllConsommation() {
     this.consommationService.getAll().subscribe(res => {
      console.log(res);
      this.consommations = res;
    });
     this.affectationService.getAllaffectation().subscribe(data => {
      console.log(data);
      this.affectations = data;
    });
  }
  deleteCons(consommation: Consommation) {

    this.consommationService.removeConsommation(consommation.id).subscribe(res => {
      console.log(res);
    });
    this.getAllConsommation();
  }
  updateConsommation(consommation: Consommation) {
    localStorage.removeItem('consId');
    localStorage.setItem('consId' , consommation.id);
    // appel constructeur of new conducteur
    const consId = localStorage.getItem('consId');
    if (!consId) {
      alert('wrong id consommation');
      this.router.navigate(['home/consommation']);
      return;
    }
    this.consommationService.getConsommationById(consId).subscribe(data => {
      console.log(data);
      this.editForm.patchValue(data);
    });

    // this.router.navigate(['home/edit-conducteur']);
  }
  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.consommationService.addConsommation(this.addForm.value).subscribe(res => {
        console.log(res);
        window.location.reload();
      },(error)=>{
        this.error=error;
        alert('Consommation already exists');
      });
          }
  }
  onSubmit1() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.consommationService.updateConsommation(this.editForm.value).subscribe(res => {
        console.log(res);
      });
      //location.reload();
    }
  }
  get f() { return this.addForm.controls; }
  get f1() { return this.editForm.controls; }


}
