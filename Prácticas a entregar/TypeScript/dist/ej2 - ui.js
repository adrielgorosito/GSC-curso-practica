"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ej2___clase_Cuadrado_1 = require("../src/ej2 - clase Cuadrado");
const ej2___clase_Circulo_1 = require("../src/ej2 - clase Circulo");
// Ejemplo de polimorfismo
function getPerimetroYArea(figura, l) {
  console.log("\nFigura:", figura.constructor.name);
  figura instanceof ej2___clase_Cuadrado_1.Cuadrado
    ? console.log("Lado:", l)
    : console.log("Radio:", l);
  console.log("Perímetro:", Math.round(figura.getPerimetro(l) * 100) / 100);
  console.log("Área:", Math.round(figura.getArea(l) * 100) / 100);
}
const cuadr = new ej2___clase_Cuadrado_1.Cuadrado();
const circ = new ej2___clase_Circulo_1.Circulo();
getPerimetroYArea(cuadr, 3);
getPerimetroYArea(circ, 3);
