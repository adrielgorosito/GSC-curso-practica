import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proj3';
  isSpecial = true;
  misClases = {
    special: true,
    importante: false,
    fuente: true,
  };

  changeClass() {
    this.isSpecial = !this.isSpecial;
  }

  constructor(private service: UsuarioService) {}

  sayHello() {
    return this.service.sayHello();
  }
}
