// Uso de map
let m = new Map([
  [1, "one"],
  [2, "dos"],
  [3, "tres"],
]);

console.log("Map original:", m);

m.set(4, "cuatro");
console.log("Map con nuevo elemento:", m);

m.set(2, "modificado");
console.log("Map con elemento modificado:", m);

// Uso de For-of para obtener los elementos
for (let [k, v] of m) {
  console.log(k, v);
}

console.log("Elemento con key = 3:", m.get(3));
