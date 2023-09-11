import { Component, OnInit, Input } from '@angular/core';
//los Input nos ayudan a recibir datos de un componente padre a un componente hijo
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
   

  //recibo el heroe desde afuera
    @Input() heroe: any = {};
    //saber que indice
    @Input() index: any;
    constructor(private route:Router){
      console.log("contructor");
    }
  
  ngOnInit(): void{}

  
  verHeroe(){
    console.log(this.index);
    this.route.navigate( ['/heroesDetalle', this.index]);
    
  }

}
