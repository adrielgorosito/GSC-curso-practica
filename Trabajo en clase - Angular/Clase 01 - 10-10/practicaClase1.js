// Scope
var topic = "Javascript";
if (topic) {
  let topic = "React";
  console.log("Block:", topic);
}
console.log("Global:", topic);

// Undefined
console.log(miVar);
var miVar = "undefined";

// Error
// console.log(miVar2);
// let miVar2 = "error";

// Hoisting
var miVar3 = "hoisting";
console.log(miVar3);

// Typeof
const obj = {
  nombre: "Adriel",
  apellido: "Gorosito",
};

function f1() {
  console.log(typeof f1);
}

f1();
