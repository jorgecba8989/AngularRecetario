import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarRecetaComponent } from './agregar-receta/agregar-receta.component';
import { BuscarRecetaComponent } from './buscar-receta/buscar-receta.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallesRecetaComponent } from './detalles-receta/detalles-receta.component';
import { SaludoComponent } from './saludo/saludo.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarRecetaComponent,
    BuscarRecetaComponent,
    CabeceraComponent,
    DetallesRecetaComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
