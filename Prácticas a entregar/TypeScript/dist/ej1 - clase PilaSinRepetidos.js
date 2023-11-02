"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PilaSinRepetidos = void 0;
const ej1___clase_Pila_1 = require("../src/ej1 - clase Pila");
class PilaSinRepetidos extends ej1___clase_Pila_1.Pila {
  agregarElemento(elemento) {
    if (!this.elementos.includes(elemento)) {
      super.agregarElemento(elemento);
    } else {
      console.log(
        "Error: el elemento '" + elemento + "' ya existe en la pila."
      );
    }
  }
}
exports.PilaSinRepetidos = PilaSinRepetidos;
