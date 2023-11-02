import { Figura } from "./ej2 - clase Figura";
import { Cuadrado } from "./ej2 - clase Cuadrado";
import { Circulo } from "./ej2 - clase Circulo";

// Ejemplo de polimorfismo
function getPerimetroYArea(figura: Figura, l: number): void {
  console.log("\nFigura:", figura.constructor.name);
  figura instanceof Cuadrado
    ? console.log("Lado:", l)
    : console.log("Radio:", l);
  console.log("Perímetro:", Math.round(figura.getPerimetro(l) * 100) / 100);
  console.log("Área:", Math.round(figura.getArea(l) * 100) / 100);
}

const cuadr = new Cuadrado();
const circ = new Circulo();
getPerimetroYArea(cuadr, 3);
getPerimetroYArea(circ, 3);
