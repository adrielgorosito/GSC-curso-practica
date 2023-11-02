"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pila = void 0;
class Pila {
    constructor() {
        this.elementos = [];
    }
    agregarElemento(elemento) {
        this.elementos.push(elemento);
    }
    quitarElemento() {
        this.elementos.pop();
    }
    getCantidadElementos() {
        return this.elementos.length;
    }
}
exports.Pila = Pila;
