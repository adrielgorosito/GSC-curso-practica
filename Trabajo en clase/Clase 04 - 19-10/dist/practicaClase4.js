"use strict";
class PersonaImp {
    constructor() {
        this.nombre = "";
        this.apellido = "";
    }
    nombreCompleto() {
        return this.nombre + " " + this.apellido;
    }
}
