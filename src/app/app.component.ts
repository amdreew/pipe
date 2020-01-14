import { Component } from '@angular/core';
import { resolve } from 'dns';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  nombre = 'andres';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  pi = Math.PI;

  n = 0.234;
  salario = 12345;

  heroe = {
    nombre: 'iroman',
    codigo: 'iron',
    cargo: 'jefe',
    direccion: {
      calle: 'avenida primera',
      casa: 'casa numero 7'
    }
  };


  // tslint:disable-next-line:no-shadowed-variable
  valorDePromesa = new Promise(  ( resolve , reject ) => {

    setTimeout( () => resolve('LLego la data!'), 3500 );

  });
}
