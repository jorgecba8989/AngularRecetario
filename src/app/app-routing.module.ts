import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarRecetaComponent } from './agregar-receta/agregar-receta.component';
import { BuscarRecetaComponent } from './buscar-receta/buscar-receta.component';
import { DetallesRecetaComponent } from './detalles-receta/detalles-receta.component';
import { SaludoComponent } from './saludo/saludo.component';


const routes: Routes = [

  {
    path: '', component: SaludoComponent
  },
  {
    path: 'agregar', component:AgregarRecetaComponent
  },
  {
    path: 'agregar/:recetaID', component:AgregarRecetaComponent
  },
  {
    path: 'buscar', component:BuscarRecetaComponent
  },
  {
    path: 'ver/:recetaID', component:DetallesRecetaComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
