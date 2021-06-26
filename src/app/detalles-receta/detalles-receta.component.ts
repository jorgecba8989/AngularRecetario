import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Receta } from '../models/recetas';

@Component({
  selector: 'app-detalles-receta',
  templateUrl: './detalles-receta.component.html',
  styleUrls: ['./detalles-receta.component.scss']
})
export class DetallesRecetaComponent implements OnInit {

  recetas: Receta[] = new Array<Receta>();
  formularioRecetas!: FormGroup
  esEditable:boolean = false
  id:string = ""
  nombre_receta:string = ""
  huevo:string = ""
  harina:string = ""
  sal:string = ""
  azucar:string = ""
  descripcion:string = ""
  manteca:string = ""
  aceite:string = ""
  agua:string = ""


  constructor(
    private db: AngularFirestore, private activeRoute: ActivatedRoute,  private fb : FormBuilder) { }

  ngOnInit(): void {
    this.formularioRecetas = this.fb.group({
      nombre_receta: [''],
      huevo: [''],
      harina: [''],
      sal: [''],
      azucar: [''],
      descripcion: [''],
      manteca: [''],
      aceite: [''],
      agua: ['']

    })


    
  this.id = this.activeRoute.snapshot.params.recetaID;
  if(this.id != undefined)
  {
    
    this.db.doc<any>('recetas' + '/' +this.id).valueChanges().subscribe((receta)=>{
     
      this.nombre_receta =  receta.nombre_receta
      this.huevo = receta.huevo
      this.harina = receta.harina
      this.sal = receta.sal
      this.azucar = receta.azucar
      this.descripcion = receta.descripcion
      this.manteca = receta.manteca
      this.aceite = receta.aceite
      this.agua = receta.agua
     
      })

  }

  }

  regresar(){
    document.location.href = './buscar';
  }

}
