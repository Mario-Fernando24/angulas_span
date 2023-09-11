import { Component, OnInit } from '@angular/core';
//obtener los parametros
import { ActivatedRoute } from '@angular/router';
import { HeroesServiceTsService } from '../../servicios/heroes.service.ts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []
  termino:any;


  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService:HeroesServiceTsService,private route:Router) 
    { }

    

  ngOnInit(): void {
    // regreso un observador
      this.activatedRoute.params.subscribe(params => {
      this.termino=params['termino']
      this.heroes = this._heroesService.buscarHeroes(params['termino'])
    })
  }

  verHeroe(index:number){
    console.log(index);
    this.route.navigate( ['/heroesDetalle', index]);
    
  }


}
