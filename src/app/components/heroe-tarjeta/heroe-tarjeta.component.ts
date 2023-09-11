import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
//los Input nos ayudan a recibir datos de un componente padre a un componente hijo
//Output nos ayuda a la comunicacion de un componente hijo a un componente padre, utilizar una funcion del padre
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

    @Output() heroeSeleccionado: EventEmitter<any>;
    
    constructor(private route:Router){
      this.heroeSeleccionado = new EventEmitter();
    }
  
  ngOnInit(): void{}

  
  verHeroe(){
     this.heroeSeleccionado.emit(this.index);
    
  }

}
