import { Component, Input, OnInit } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { Receta } from '../models/recetas';

@Component({
  selector: 'app-buscar-receta',
  templateUrl: './buscar-receta.component.html',
  styleUrls: ['./buscar-receta.component.scss']
})
export class BuscarRecetaComponent implements OnInit {


  recetas: Receta[] = new Array<Receta>();
  id:string = ""

  @Input ('nombre_receta') nombre_receta!:string | undefined



  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
  
    this.recetas.length = 0;
    this.db.collection('recetas').get().subscribe((resultado)=>{

      for(let item of resultado.docs){
          console.log(item.id) //trae el id de clientes
          
          let receta: any  = item.data() ;
          receta.id = item.id;
          receta.visible = false
          this.recetas.push(receta)
      }
    })
  }

  buscarReceta(nombre_receta:any){
    this.recetas.forEach((receta)=>{
      if(receta.nombre_receta.toLowerCase().includes(nombre_receta.toLowerCase()))
      {
        receta.visible = true
      }
      else{
        receta.visible = false
      }
    })
  }


  eliminar(item:any){
   
    this.db.collection("recetas").doc(item.id).delete();
    document.location.href = './buscar';
  }

}
