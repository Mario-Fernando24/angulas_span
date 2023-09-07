import { Component, OnInit } from '@angular/core';
import { HeroesServiceTsService,Heroe } from '../../servicios/heroes.service.ts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit{

  heroes:Heroe[] =[];
  
  //solo es accesible en este componnente y importo mi servicio
  constructor(private _heroesService:HeroesServiceTsService, private route:Router){
    console.log("contructor");
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }



  verHeroe(index:number){
    console.log(index);
    this.route.navigate( ['/heroesDetalle', index]);
    
  }

}


