// Ejemplo de interface
interface Persona {
  nombre: string;
  apellido: string;

  nombreCompleto(): string;
}

class PersonaImp implements Persona {
  nombre: string = "";
  apellido: string = "";

  nombreCompleto(): string {
    return this.nombre + " " + this.apellido;
  }
}
