// Ejercicio 3: Implemente su propia función filter

// En este caso, implemento una función filter que encuentra todos los números que sean mayores a 2.

const arr = [1, 2, 3, 4, 5];
const newArr = [];

function customFilter(arr, func) {
  arr.forEach((e) => {
    if (func(e)) {
      newArr.push(e);
    }
  });
  return newArr;
}

console.log("Initial array: ", arr);
console.log("CustomFilter function: ", customFilter(arr, (e) => e > 2));
console.log("Filter function by JavaScript: ", arr.filter((e) => e > 2));