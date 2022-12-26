import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficLightService { // semáforo

  private lights = new Subject<string>(); // es una variable que sirve como "emisor"
  lights$ = this.lights.asObservable(); // el observable lleva $ al final por convencion, convierto el subject a observable para evitar usar el metodo next()
  private lastValue: string | null = null; // es una propiedad del servicio que va contener el ultimo valor emitido

  constructor() {

    interval(1000).subscribe( // en intervalos de 1000 ms (1 segundo) voy a hacer ...
      () => this.lastValue === 'verde' ? this.lights.next('rojo') : this.lights.next('verde')
      // una funcion flecha que me pregunta si el ultimo valor fue verde, entonces el siguiente va ser rojo, si no va ser verde
      );

    this.lights.subscribe( // en cada emision
      (valor) => (this.lastValue = valor) // una funcion flecha que inserto por parametro un valor, y se lo asigno a la propiedad lastValue
      );

  }
}
