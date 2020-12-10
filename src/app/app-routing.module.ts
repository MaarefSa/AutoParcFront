import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './home/layout/layout.component';
import {VehiculeComponent} from './vehicule/vehicule.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './service/auth.guard';
import {EditVehiculeComponent} from './vehicule/edit-vehicule/edit-vehicule.component';
import {ConducteurComponent} from './conducteur/conducteur.component';
import {ConsommationComponent} from './consommation/consommation.component';
import {AffectationComponent} from './affectation/affectation.component';
import {RegisterComponent} from './register/register.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path: '' , component: LoginComponent },
  {path: 'home', component: HomeComponent,
    children: [
      {path: '', component: LayoutComponent},
      {path: 'vehicule', component: VehiculeComponent},
      { path: 'conducteur', component: ConducteurComponent},
      { path: 'consommation', component: ConsommationComponent},
      { path: 'affectation', component: AffectationComponent},
      { path: 'edit-vehicule', component: EditVehiculeComponent},
      { path: 'register', component: RegisterComponent}
      ], canActivate: [AuthGuard]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
