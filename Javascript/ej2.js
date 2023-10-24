// Ejercicio 2: Implemente su propia función find

// En este caso, implemento una función find que encuentra el primer número que sea mayor a 2.

const arr = [1, 2, 3, 4, 5];

function customFind(arr, func) {
  for (i = 0; i < arr.length; i++) if (func(arr[i])) return arr[i];
}

function search(e) {
  if (e > 2) return true;
}

console.log("Initial array: ", arr);
console.log("CustomFind function: ", customFind(arr, search));
console.log("Find function by JavaScript: ", arr.find(search));
