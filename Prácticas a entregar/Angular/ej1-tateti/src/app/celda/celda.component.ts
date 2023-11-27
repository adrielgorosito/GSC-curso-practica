import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css'],
})
export class CeldaComponent {
  @Input() celda!: string;
  @Output() celdaSeleccionada = new EventEmitter<void>();
}
