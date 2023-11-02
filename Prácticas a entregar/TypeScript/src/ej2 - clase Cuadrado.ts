import { Figura } from "./ej2 - clase Figura";

export class Cuadrado extends Figura {
  public getPerimetro(l: number): number {
    return l * 4;
  }

  public getArea(l: number): number {
    return l * l;
  }
}
