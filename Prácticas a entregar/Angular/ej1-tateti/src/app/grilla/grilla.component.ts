import { Component } from '@angular/core';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css'],
})
export class GrillaComponent {
  arrayCeldas: string[] = Array(9).fill('');
  turno: string = 'X';

  celdaSeleccionada(i: number) {
    this.arrayCeldas[i] = this.turno;
    this.turno = this.turno == 'X' ? 'O' : 'X';
  }

  movsRestantes(): number {
    return this.arrayCeldas.filter((celda) => !celda).length;
  }

  reiniciar() {
    this.arrayCeldas.fill('');
  }
}
