import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { MensajesService } from '../services/mensajes.service';



@Component({
  selector: 'app-agregar-receta',
  templateUrl: './agregar-receta.component.html',
  styleUrls: ['./agregar-receta.component.scss']
})
export class AgregarRecetaComponent implements OnInit {


  formularioRecetas!: FormGroup
  esEditable:boolean = false
  id:string = ""

  constructor(private storage: AngularFireStorage, 
              private db: AngularFirestore, 
              private activeRoute: ActivatedRoute, 
              private fb : FormBuilder,
              private msj: MensajesService) { }

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
      this.esEditable = true
      this.db.doc<any>('recetas' + '/' +this.id).valueChanges().subscribe((receta)=>{
        console.log(receta)
        this.formularioRecetas.setValue({
          nombre_receta: receta.nombre_receta,
          huevo: receta.huevo,
          harina: receta.harina,
          sal:receta.sal,
          azucar: receta.azucar,
          descripcion: receta.descripcion,
          manteca: receta.manteca,
          aceite: receta.aceite,
          agua: receta.agua
         
        })
  
      })
    }

  }


  agregar()
  {
     
      this.db.collection('recetas').add(this.formularioRecetas.value).then((termino)=>{
        this.msj.mensajeCorrecto("Felicitaciones", "Se agrego correctamente")
        
        this.formularioRecetas.reset();
      })
  }


  editar(){
    this.db.doc('recetas/'+ this.id).update(this.formularioRecetas.value).then((resultado)=>{
      //this.msj.mensajeCorrecto("Felicitaciones", "Se edito correctamente los datos")
     
      document.location.href = './buscar';
    }).catch(()=>{
      alert("Problemas para editar..")
      //this.msj.mensajeError("Error", "Hubo problema con los datos")
    })
  }


  regresar(){
    document.location.href = './buscar';
  }
}
