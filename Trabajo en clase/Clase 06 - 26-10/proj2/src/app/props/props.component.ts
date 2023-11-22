import { Component } from '@angular/core';

@Component({
  selector: 'app-props',
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.css'],
})
export class PropsComponent {
  botonHabilitado = true;

  habilitarDeshabilitar() {
    this.botonHabilitado = !this.botonHabilitado;
  }
}
