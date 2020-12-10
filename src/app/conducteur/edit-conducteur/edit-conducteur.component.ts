import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConducteurService} from '../../service/conducteur.service';
import {Conducteur} from '../../../conducteurModule';

@Component({
  selector: 'app-edit-conducteur',
  templateUrl: './edit-conducteur.component.html',
  styleUrls: ['./edit-conducteur.component.css']
})
export class EditConducteurComponent implements OnInit {
  editForm: FormGroup;
  coducteur: Conducteur;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private conducteurService: ConducteurService) { }

  ngOnInit() {
    const conducteurId = localStorage.getItem('conducteurId');
    if (!conducteurId) {
      alert('wrong id conducteur');
      this.router.navigate(['home/conducteur']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      matricule: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      numPermis: ['', Validators.required]
    });
    this.conducteurService.getConducteurById(conducteurId).subscribe(data => {
      console.log(data);
      this.editForm.patchValue(data);
    });
  }

  get f() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.conducteurService.updateConducteur(this.editForm.value)
        .subscribe( data => {
          console.log(data);
          this.router.navigate(['home/conducteur']);
        });
    }
  }
}
