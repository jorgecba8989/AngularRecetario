import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiMarvelService } from '../services/api-marvel.service';

@Component({
  selector: 'app-mis-favoritos',
  templateUrl: './mis-favoritos.component.html',
  styleUrls: ['./mis-favoritos.component.scss']
})
export class MisFavoritosComponent implements OnInit {

  comicBuscado: any=[];
  characterName: string = '';
  showSearchResult:boolean= false;
  searchedCharacter:any=[];
  formularioBusqueda!: FormGroup;

  constructor(private service:ApiMarvelService,
              // public fb:FormBuilder,
              ) { }

  ngOnInit(): void {
    // this.formularioBusqueda = new FormGroup({
    //   buscador:new FormControl (""),
     
    // })
  }

  // buscar(nombreBuscar : number){
  //   console.log(nombreBuscar)
  //   this.service.comicSeleccionado(nombreBuscar).subscribe((result)=>{
  //     this.comicBuscado = result.data.results;
  //     console.log(this.comicBuscado)
  //   })
  // }

  buscar(event : any){
    this.characterName = event.target.value;
    console.log(this.characterName);
    // let _valor = this.formularioBusqueda.get("buscador")?.value
    this.service.getCharacterByName(this.characterName).subscribe((result)=>{
      console.log(result);
      if(result.data.count>0)
      {
        this.showSearchResult = true;
        this.searchedCharacter = result.data.results;
      }
     
    })
  }

}
