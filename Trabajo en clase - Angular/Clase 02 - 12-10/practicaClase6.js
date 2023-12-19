// For-of de un Object.entries
let obj = { x: 1, y: 2, z: 3 };
let pairs = "";

for (let [k, v] of Object.entries(obj)) {
  console.log(k, v, [k, v]);
  pairs += k + v;
}

console.log(pairs);

// Propiedad de objetos:
const person = { nombre: "Adriel", apellido: "Gorosito" };

console.log(
  "\n\nEscribir obj.nombre:",
  person.nombre,
  'es lo mismo que escribir obj["nombre"]:',
  person["nombre"]
);
