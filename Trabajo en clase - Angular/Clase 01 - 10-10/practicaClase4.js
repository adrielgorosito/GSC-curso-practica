// Desestructuración de arreglos
const [firstAnimal] = ["gato", "perro", "canario"];

console.log(firstAnimal);
console.log("No es un objeto, es un string:", typeof firstAnimal);

const [, , thirdAnimal] = ["gato", "perro", "canario"];

console.log(thirdAnimal);
