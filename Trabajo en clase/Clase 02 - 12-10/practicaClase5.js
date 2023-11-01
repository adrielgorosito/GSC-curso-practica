// Propiedades de objetos y For-of
let obj = {
  x: 1,
  y: 2,
  z: 3,
};

// Propiedades
const arr = Object.keys(obj);
const arr2 = Object.values(obj);
const arr3 = Object.entries(obj);

console.log("Keys:", arr);
console.log("Values:", arr2);
console.log("Entries:", arr3);

// For-of
let keys = "";

for (let k of arr) {
  keys += k;
}

console.log("Forof:", keys);
