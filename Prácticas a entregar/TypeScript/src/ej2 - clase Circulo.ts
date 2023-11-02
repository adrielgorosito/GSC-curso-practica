import { Figura } from "./ej2 - clase Figura";

export class Circulo extends Figura {
  public getPerimetro(r: number): number {
    return Math.PI * r * 2;
  }

  public getArea(r: number): number {
    return Math.PI * r * r;
  }
}
