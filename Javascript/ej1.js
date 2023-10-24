// Ejercicio 1: Implemente su propia función map

// En este caso, implemento una función map que multiplica todos los elementos de un arreglo por 2.

const arr = [1, 2, 3, 4, 5];
const newArr = [];

function customMap(arr, func) {
  for (i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}

function multiplyBy2(e) {
  return e * 2;
}

console.log("Initial array: ", arr);
console.log("CustomMap function: ", customMap(arr, multiplyBy2));
console.log("Map function by JavaScript: ", arr.map(multiplyBy2));
