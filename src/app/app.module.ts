import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { LayoutComponent } from './home/layout/layout.component';
import { FooterComponent } from './home/footer/footer.component';
import { SidbarComponent } from './home/sidbar/sidbar.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VehiculeService} from './service/vehicule.service';
import { EditVehiculeComponent } from './vehicule/edit-vehicule/edit-vehicule.component';
import { ConducteurComponent } from './conducteur/conducteur.component';
import { AffectationComponent } from './affectation/affectation.component';
import { ConsommationComponent } from './consommation/consommation.component';
import {ConducteurService} from './service/conducteur.service';
import { EditConducteurComponent } from './conducteur/edit-conducteur/edit-conducteur.component';
import {ConsommationService} from './service/consommation.service';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    SidbarComponent,
    VehiculeComponent,
    LoginComponent,
    EditVehiculeComponent,
    ConducteurComponent,
    AffectationComponent,
    ConsommationComponent,
    EditConducteurComponent,
    RegisterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [VehiculeService, ConducteurService, ConsommationService, AffectationComponent, SidbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
