import { DocumentReference } from "@angular/fire/firestore";

export class Receta{
    id!:string;
    nombre_receta!: string;
    huevo!: string;
    harina!: string;
    sal!: string;
    azucar!:string;
    descripcion!: string;
    manteca!:string;
    aceite!:string;
    agua!:string;
    ref!: DocumentReference;
    visible:boolean = false  //lo uso para cuando tengo que buscar una receta en especifico
}