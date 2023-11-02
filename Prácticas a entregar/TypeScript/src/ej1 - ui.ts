import { Pila } from "./ej1 - clase Pila";
import { PilaSinRepetidos } from "./ej1 - clase PilaSinRepetidos";

/* Pila que acepta valores repetidos */
console.log("Pila que acepta valores repetidos:\n");

const pilaNumeros = new Pila<number>();
pilaNumeros.agregarElemento(1);
pilaNumeros.agregarElemento(2);
pilaNumeros.agregarElemento(1);
console.log("Tamaño pilaNumeros:", pilaNumeros.getCantidadElementos()); // Debería devolver: 3
pilaNumeros.quitarElemento();
console.log("Nuevo tamaño:", pilaNumeros.getCantidadElementos()); // Debería devolver: 2

const pilaStrings = new Pila<string>();
pilaStrings.agregarElemento("ABC");
pilaStrings.agregarElemento("DEF");
pilaStrings.agregarElemento("GHI");
pilaStrings.agregarElemento("ABC");
console.log("\nTamaño pilaStrings:", pilaStrings.getCantidadElementos()); // Debería devolver: 4
pilaStrings.quitarElemento();
pilaStrings.quitarElemento();
console.log("Nuevo tamaño:", pilaStrings.getCantidadElementos()); // Debería devolver: 2

const pilaBool = new Pila<boolean>();
pilaBool.agregarElemento(true);
pilaBool.agregarElemento(false);
pilaBool.agregarElemento(true);
pilaBool.agregarElemento(true);
pilaBool.agregarElemento(false);
pilaBool.agregarElemento(true);
console.log("\nTamaño pilaBool:", pilaBool.getCantidadElementos()); // Debería devolver: 6
pilaBool.quitarElemento();
pilaBool.quitarElemento();
pilaBool.quitarElemento();
console.log("Nuevo tamaño:", pilaBool.getCantidadElementos()); // Debería devolver: 3

console.log("\n---------------------------------------------------\n");

/* Pila que no acepta valores repetidos */
console.log("Pila que no acepta valores repetidos:\n");

const pilaNums = new PilaSinRepetidos<number>();
pilaNums.agregarElemento(1);
pilaNums.agregarElemento(2);
pilaNums.agregarElemento(1); // No se agregará porque ya existe
pilaNums.agregarElemento(3);
pilaNums.agregarElemento(4);
console.log("Tamaño pilaNums:", pilaNums.getCantidadElementos()); // Debería devolver: 4
pilaNums.quitarElemento();
pilaNums.agregarElemento(2);
console.log("Nuevo tamaño:", pilaNums.getCantidadElementos()); // Debería devolver: 3
