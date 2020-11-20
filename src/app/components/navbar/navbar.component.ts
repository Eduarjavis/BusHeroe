import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../../servicios/heroes.services';
import { Router }from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  heroes:Heroe[];

  constructor(
    private _heroService:HeroesService,
    private _router:Router
  ) { }

  buscarHeroe(termino:string){
    /* this.heroes=this._heroService.BuscarHeroe(termino);
    this._heroService.setAux(this.heroes); */
    console.log(termino);
    this._router.navigate(['buscar',termino]);
    /* return this.heroes */
  }

  /* verHeroe(idx:number){
    this._router.navigate(['buscar',idx])//ruta y variable 
    } */
}
