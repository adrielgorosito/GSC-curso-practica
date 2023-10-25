// Ejercicio 4: Implemente su propia función reduce

// En este caso, implemento una función reduce que suma todos los números del arreglo.

const arr = [1, 2, 3, 4, 5];
let accum = 0;

function customReduce(arr, func) {
  arr.forEach((e) => (accum = func(accum, e)));
  return accum;
}

function sum(accum, e) {
  return accum + e;
}

console.log("Initial array: ", arr);
console.log("CustomReduce function: ", customReduce(arr, sum));
console.log("Reduce function by JavaScript: ", arr.reduce(sum));
