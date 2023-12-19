// Uso de Generics

// Función original
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);
myNumArr.push(400);
myStrArr.push("Hello TypeScript");
myNumArr.push("Hi");
myStrArr.push(500);
console.log("Sin generics:");
console.log(myNumArr);
console.log(myStrArr, "\n");

// Función con Generics
function getArrayGeneric<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
let myNumArrGeneric = getArrayGeneric<number>([100, 200, 300]);
let myStrArrGeneric = getArrayGeneric<string>(["Hello", "World"]);
myNumArrGeneric.push(400);
myStrArrGeneric.push("Hello TypeScript");
// myNumArrGeneric.push("Hi");    Devolverá error
// myStrArrGeneric.push(500);     Devolverá error
console.log("Con generics:");
console.log(myNumArrGeneric, "(solo números)");
console.log(myStrArrGeneric, "(solo strings)");
