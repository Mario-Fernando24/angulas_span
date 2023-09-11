import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServiceTsService } from '../../servicios/heroes.service.ts.service';


@Component({
  selector: 'app-heroes-detalle',
  templateUrl: './heroes-detalle.component.html',
  styleUrls: ['./heroes-detalle.component.css']
})
export class HeroesDetalleComponent {

  heroe:any = {}
   
    
    constructor(private activatedRoute: ActivatedRoute,private _heroesService: HeroesServiceTsService){
    // regreso un observador
      this.activatedRoute.params.subscribe( params => {
              this.heroe = this._heroesService.getDetalleHeroe(params['id']);
      })
    }
  
}
