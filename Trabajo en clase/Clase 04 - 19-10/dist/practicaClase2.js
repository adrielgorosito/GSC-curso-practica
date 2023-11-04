"use strict";
// Programación orientada a objetos
// Clases (encapsulamiento)
class Vehicle {
    constructor(puertas) {
        this.puertas = 4;
    }
    getPuertas() {
        return this.puertas;
    }
    setPuertas(p) {
        this.puertas = p;
    }
}
const v = new Vehicle(4);
// console.log(v.puertas);    Devolverá error ya que no se puede acceder por el 'private'
console.log(v.getPuertas());
v.setPuertas(6);
console.log(v.getPuertas());
