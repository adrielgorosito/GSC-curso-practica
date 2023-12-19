import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {
    this.usuarios.push(new Usuario(1, 'Adriel', 'Gorosito'));
    this.usuarios.push(new Usuario(2, 'Luciano', 'Diamand'));
    this.usuarios.push(new Usuario(3, 'Curso', 'San Cristobal'));
  }

  usuarios: Usuario[] = [];

  sayHello() {
    return 'Hello world!';
  }

  getAllUsers() {
    return this.usuarios;
  }

  getUser(id: number) {
    return this.usuarios.find((usuario) => {
      return usuario.id === id;
    });
  }
}
