import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../servicios/heroes.services'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[]

  constructor(
    private _heroesService:HeroesService,
    private _router:Router
    ) {     
  }

  ngOnInit(): void {
    this.heroes=this._heroesService.getHeroes();    
  }
  //esta es una forma de moverte por la ruta con la etiqueta boton
  //se necesita importar Router de angular
  verHeroe(idx:number){
  this._router.navigate(['heroe',idx])//ruta y variable 
  }
  
}
