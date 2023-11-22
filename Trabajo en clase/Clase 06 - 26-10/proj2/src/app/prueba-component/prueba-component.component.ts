import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-prueba-component',
  templateUrl: './prueba-component.component.html',
  styleUrls: ['./prueba-component.component.css'],
})
export class PruebaComponentComponent {
  valor = 'hola123';
  heroe = new Hero();

  public funcHero() {
    return (this.heroe.nombre = 'Superman');
  }

  public mostarNombre() {
    return 'Nombre y apellido';
  }
}
