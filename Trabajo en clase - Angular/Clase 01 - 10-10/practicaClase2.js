// Desestructuración de objetos
const sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"],
};

const { bread, meat } = sandwich;

console.log("'", bread, "' es igual a '", sandwich.bread, "'");
console.log("'", meat, "' es igual a '", sandwich.meat, "'");
