import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-prueba',
  templateUrl: './pipe-prueba.component.html',
  styleUrls: ['./pipe-prueba.component.css'],
})
export class PipePruebaComponent {
  birthday = new Date(1973, 2, 23);
  toggle = true;

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  pluralMap = {
    '=0': 'Sin días',
    '=1': '1 día',
    other: '# días',
  };

  units: number[] = new Array(0, 1, 2, 3, 4);
}
