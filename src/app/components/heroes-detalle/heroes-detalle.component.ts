import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-detalle',
  templateUrl: './heroes-detalle.component.html',
  styleUrls: ['./heroes-detalle.component.css']
})
export class HeroesDetalleComponent implements OnInit{

    
    constructor(){
      console.log("contructor");
    }
  
    ngOnInit(): void {
    }
}
