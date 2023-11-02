"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
const ej2___clase_Figura_1 = require("../src/ej2 - clase Figura");
class Circulo extends ej2___clase_Figura_1.Figura {
  getPerimetro(r) {
    return Math.PI * r * 2;
  }
  getArea(r) {
    return Math.PI * r * r;
  }
}
exports.Circulo = Circulo;
