// Mejora de objetos literales

// Original
const nombre = "Adriel";
const apellido = "Gorosito";

const persona = {
  nombre: nombre,
  apellido: apellido,
};

console.log(persona);

// Mejora
const nombre2 = "Adriel";
const apellido2 = "Gorosito";

const persona2 = {
  nombre2,
  apellido2,
};

console.log(persona2);

// También se puede agregar funciones
const nombre3 = "Adriel";
const apellido3 = "Gorosito";
const nombreCompleto = function () {
  return nombre3 + "" + apellido3;
};

const persona3 = {
  nombre3,
  apellido3,
  nombreCompleto,
};

console.log(persona3);
