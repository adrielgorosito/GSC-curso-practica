import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proj2';
  textoQueCambia = 'Este texto cambiará al clickearse el div';
  currentHero = new Hero();

  constructor() {
    this.currentHero.id = 10;
  }
  actualizar(event: string) {
    this.textoQueCambia = event;
  }
}
