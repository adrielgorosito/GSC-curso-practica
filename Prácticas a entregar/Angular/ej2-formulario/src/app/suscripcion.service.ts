import { Injectable } from '@angular/core';
import { Suscripcion } from './suscripcion';

@Injectable({
  providedIn: 'root',
})
export class SuscripcionService {
  constructor(s: Suscripcion) {
    this.s = s;
  }

  private s: Suscripcion;

  showData() {
    console.log(
      'Datos de la suscripción:\nNombre:',
      this.s.nombre,
      '\nApellido:',
      this.s.apellido,
      '\nEmail:',
      this.s.email,
      '\nContraseña:',
      this.s.password,
      '\nTeléfono:',
      this.s.telefono,
      '\nNotificaciones:',
      this.s.notificaciones ? 'Si' : 'No'
    );
  }
}
