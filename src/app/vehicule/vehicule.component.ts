import { Component, OnInit } from '@angular/core';
import {VehiculeService} from '../service/vehicule.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Vehicule} from '../../vehiculeModule';
import {Router} from '@angular/router';


@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
  public loading = false;
  public error = '';
  vehicules: Vehicule[];
  searchVeh: Vehicule[];
  marques = [{name:'Iveco'},{name:'Daf'},{name:'Renault'},{name:'Mercedes'},{name:'Volvo'},{name:'Range Rover'}];
  couleurs = [{name:'Blanc'},{name:'Noire'},{name:'Rouge'},{name:'Vert'},{name:'Gold'},{name:'Bleu'},{name:'Gris'}];
  constructor(private  vehiculeService: VehiculeService, private router: Router , private formBuilder: FormBuilder ) { }

  addForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  searchText="";
  critereValue="";
  ngOnInit() {
    this.getAll();
    // this.resetForm();
    this.addForm = this.formBuilder.group({
      id: [],
      immatricule: ['', [Validators.required , Validators.pattern("^([0-9]+ tun +[0-9]{1,4})$")] ],
      marque: ['', Validators.required],
      numchassis: ['', [Validators.required , Validators.pattern("^([A-Z]{2}[0-9]{6})$")]],
      cartegrise: ['', [Validators.required , Validators.maxLength(6), Validators.maxLength(6)]],
      couleur: ['', Validators.required]
    });
    this.editForm = this.formBuilder.group({
      id: [],
      immatricule: ['', [Validators.required , Validators.pattern("^([0-9]+ tun +[0-9]{1,4})$")]],
      marque: ['', Validators.required],
      numchassis: ['', [Validators.required , Validators.pattern("^([A-Z]{2}[0-9]{6})$")]],
      cartegrise: ['', [Validators.required , Validators.maxLength(6), Validators.maxLength(6)]],
      couleur: ['', Validators.required]
    });
  }

  getAll(): void {
    this.vehiculeService.getAllVehicules().subscribe(res  => {
      console.log(res);
      this.searchVeh = this.vehicules = res;
    });
  }

  deleteVehicule(vehicule: Vehicule) {
    this.vehiculeService.removeVehicules(vehicule.id).subscribe(res => {
      console.log(res);
      this.getAll();
      //window.location.reload();
    },(error) => {
      this.error = error;
      alert('Cette vehicule est affecté a une mission');
    });
  }
  updateVehicule(vehicule: Vehicule) {
    //localStorage.removeItem("vehiculeId");
    localStorage.setItem("vehiculeId", vehicule.id);
    // appel constructeur of new vehicule
    const vehiculeId = localStorage.getItem('vehiculeId');
    if (!vehiculeId) {
      alert('wrong id vehicule');
      this.router.navigate(['home/vehicule']);
      return;
    }
    this.vehiculeService.getVehiculeById(vehiculeId).subscribe(data => {
      console.log(data);
      this.editForm.patchValue(data);
    });



    // this.router.navigate(['home/edit-vehicule']);


  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.vehiculeService.addVehicule(this.addForm.value)
        .subscribe(res => {
          console.log(res);
          window.location.reload();
        },(error) => {
          this.error = error;
          alert('Vehicule already exists');
        });


    }
  }


  onSubmit1() {
    this.submitted = true;
    if (this.editForm.valid) {
      this.vehiculeService.updateVehicule(this.editForm.value).subscribe(res => {
        console.log(res);
      });
      location.reload();
    }
  }

  searchVehicule(){
    if(this.critereValue == "marque"){
      this.searchVeh = this.vehicules.filter((veh) => veh.marque.toLowerCase().includes(this.searchText.toLowerCase()));
    }else if(this.critereValue == "couleur"){
      this.searchVeh = this.vehicules.filter((veh) => veh.couleur.toLowerCase().includes(this.searchText.toLowerCase()));
    }else{
      alert("choisir un critere");
    }

  }

  // resetForm(form?: NgForm) {
  //   if (form != null ) {
  //   form.resetForm();
  //   }
  //   this.vehiculeService.formData = {
  //     id: null ,
  //     immatricule: '',
  //     marque: '',
  //     numchassis: '',
  //     cartegrise: null,
  //     couleur: ''
  //   };
  // }

  // createVehicule(form: NgForm) {
  //   this.vehiculeService.addVehicule(form.value).subscribe(res => {
  //     this.resetForm();
  //     alert('Ajout successful ..!');
  //   }, error => {
  //     this.error = error;
  //     alert('erreur ..!');
  //     this.loading = false;
  //     });
  get f() { return this.addForm.controls; }
  get f1() { return this.editForm.controls; }

   }


