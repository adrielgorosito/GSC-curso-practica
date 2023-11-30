import { Injectable } from '@angular/core';
import { Suscripcion } from './suscripcion';

@Injectable({
  providedIn: 'root',
})
export class SuscripcionService {
  constructor() {}

  showData(s: Suscripcion) {
    console.log(
      'Datos de la suscripción:\nNombre:',
      s.nombre,
      '\nApellido:',
      s.apellido,
      '\nEmail:',
      s.email,
      '\nContraseña:',
      s.password,
      '\nTeléfono:',
      s.telefono,
      '\nNotificaciones:',
      s.notificaciones ? 'Si' : 'No'
    );
  }
}
