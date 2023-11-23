import { Component } from '@angular/core';
import { Cliente, ClienteI } from './cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proj3';

  clientes: ClienteI[] = [];
  clienteSeleccionado!: ClienteI | undefined;

  constructor() {
    this.clientes.push(new Cliente(1, 'Adriel', 'Gorosito', true));
    this.clientes.push(new Cliente(2, 'Luciano', 'Diamand', true));
    this.clientes.push(new Cliente(3, 'Grupo', 'San Cristobal', true));
    this.clientes.push(new Cliente(4, 'Curso', 'UTN', false));
  }

  seleccionarCliente(c: ClienteI) {
    this.clienteSeleccionado = c;
  }

  borrarRegistro($event: Cliente) {
    this.clientes = this.clientes.filter((cli) => {
      return cli !== $event;
    });

    this.clienteSeleccionado = undefined;
  }
}
