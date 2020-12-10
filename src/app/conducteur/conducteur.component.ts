import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConducteurService} from '../service/conducteur.service';
import {Conducteur} from '../../conducteurModule';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-conducteur',
  templateUrl: './conducteur.component.html',
  styleUrls: ['./conducteur.component.css']
})
export class ConducteurComponent implements OnInit {
  conducteurs: Conducteur ;
  addForm: FormGroup;
  editForm: FormGroup;
  error = '' ;
  submitted = false;

  constructor(private router: Router, private conducteurService: ConducteurService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAll();


    this.addForm = this.formBuilder.group({
      id: [],
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      numPermis: ['', Validators.required],
      dateFunction: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required]
    });
    this.editForm = this.formBuilder.group({
      id: [],
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      numPermis: ['', Validators.required],
      dateFunction: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required]
    });
  }
  getAll() {
    this.conducteurService.getAllConducteur().subscribe(res => {
    console.log(res);
    this.conducteurs = res ;
    });
  }
  deleteCond(conducteur: Conducteur) {
    this.conducteurService.deleteConducteur(conducteur.id).subscribe(res => {
      console.log(res);
      location.reload();
    },(error) => {
      this.error = error;
      alert('Cet conducteur est affecté a une mission');
    });
    this.getAll();
  }
  updateConducteur(conducteur: Conducteur) {
    localStorage.removeItem('conducteurId');
    localStorage.setItem('conducteurId' , conducteur.id);
    //appel constructeur of new conucteur
    const conducteurId = localStorage.getItem('conducteurId');
    if (!conducteurId) {
      alert('wrong id conducteur');
      this.router.navigate(['home/conducteur']);
      return;
    }
    this.conducteurService.getConducteurById(conducteurId).subscribe(data => {
      console.log(data);
      this.editForm.patchValue(data);
    });
    //this.router.navigate(['home/edit-conducteur']);
  }
  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.conducteurService.addConducteur(this.addForm.value).subscribe(res => {
        console.log(res);
        window.location.reload();
      },(error) => {
        this.error = error;
        alert('Conducteur already exists');
      });
      //location.reload();
    }
  }
onSubmit1() {
  this.submitted = true;
  if (this.editForm.valid) {
    this.conducteurService.updateConducteur(this.editForm.value)
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
