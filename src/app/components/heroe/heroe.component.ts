import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router'
import { HeroesService } from '../../servicios/heroes.services'
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  /*para redireccionar del boton al modulo heroe necesitamos importar ActivatedRoute de router e iniciarlo en nuestr contructor,
    despues creamos un metodo que servira de observador para recibir los parametros recibidos al hacer click en ver mas
    creamos variable local heroe e importamos*/
  heroe:any={};

  constructor(private _activatedRouter:ActivatedRoute,
              private _heroesServices:HeroesService
  )
  {   

    this._activatedRouter.params.subscribe(parametros=>{
    this.heroe=this._heroesServices.getHeroe(parametros['id']);
      
    })

  }


}
