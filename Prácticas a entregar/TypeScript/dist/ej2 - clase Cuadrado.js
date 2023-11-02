"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuadrado = void 0;
const ej2___clase_Figura_1 = require("../src/ej2 - clase Figura");
class Cuadrado extends ej2___clase_Figura_1.Figura {
  getPerimetro(l) {
    return l * 4;
  }
  getArea(l) {
    return l * l;
  }
}
exports.Cuadrado = Cuadrado;
