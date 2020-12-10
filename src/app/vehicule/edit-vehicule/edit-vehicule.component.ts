import { Component, OnInit } from '@angular/core';
import {Vehicule} from '../../../vehiculeModule';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {VehiculeService} from '../../service/vehicule.service';

@Component({
  selector: 'app-edit-vehicule',
  templateUrl: './edit-vehicule.component.html',
  styleUrls: ['./edit-vehicule.component.css']
})
export class EditVehiculeComponent implements OnInit {

  vehicule: Vehicule;
  editForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private vehiculeService: VehiculeService) { }

  ngOnInit() {

    let productId = localStorage.getItem("productId");
    if (!productId) {
      alert("Something wrong!");
      this.router.navigate(['home/vehicule']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      immatricule: ['', Validators.required],
      marque: ['', Validators.required],
      numchassis: ['', Validators.required],
      cartegrise: ['', Validators.required],
      couleur: ['', Validators.required]
    });

    this.vehiculeService.getVehiculeById(productId).subscribe(data => {
      console.log(data);
      this.editForm.patchValue(data); //Don't use editForm.setValue() as it will throw console error
    });

  }
// get the form short name to access the form fields
  get f() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.editForm.valid) {
      this.vehiculeService.updateVehicule(this.editForm.value)
        .subscribe( data => {
          console.log(data);
          this.router.navigate(['home/vehicule']);
        });
    }
  }
}
