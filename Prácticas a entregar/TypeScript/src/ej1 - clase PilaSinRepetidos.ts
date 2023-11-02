import { Pila } from "./ej1 - clase Pila";

export class PilaSinRepetidos<T> extends Pila<T> {
  agregarElemento(elemento: T): void {
    if (!this.elementos.includes(elemento)) {
      super.agregarElemento(elemento);
    } else {
      console.log(
        "Error: el elemento '" + elemento + "' ya existe en la pila."
      );
    }
  }
}
