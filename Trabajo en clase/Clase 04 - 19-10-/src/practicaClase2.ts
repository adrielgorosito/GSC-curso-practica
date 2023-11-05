// Programación orientada a objetos
// Clases (encapsulamiento)
class Vehicle {
  private puertas: number;

  constructor(puertas: number) {
    this.puertas = 4;
  }

  public getPuertas() {
    return this.puertas;
  }

  public setPuertas(p: number) {
    this.puertas = p;
  }
}

const v = new Vehicle(4);
// console.log(v.puertas);    Devolverá error ya que no se puede acceder por el 'private'
console.log(v.getPuertas());
v.setPuertas(6);
console.log(v.getPuertas());
