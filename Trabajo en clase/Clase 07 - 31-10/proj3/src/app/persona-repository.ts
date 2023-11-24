import { inject } from '@angular/core';
import { ConnectionI, ConnectionImpl } from './connection';

export class PersonaRepository {
  private conn: ConnectionI;

  constructor(conn: ConnectionI) {
    this.conn = conn;
  }

  private conn2 = inject(ConnectionImpl);

  insertar() {}

  actualizar() {}

  borrar() {}

  recuperar() {}
}
