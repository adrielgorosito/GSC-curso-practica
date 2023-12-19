// Función flecha y uso de throw error
//  = "default"
const lordify = (firstName, land) => {
  if (!firstName) throw new Error("A first name is required to lordify");
  if (!land) throw new Error("A lord must have a land");
  return firstName + " of " + land;
};

console.log(lordify("Kelly", "Sonoma"));

try {
  console.log(lordify("Kelly")); // Devolverá error
  console.log(lordify(undefined, "Sonoma")); // Devolverá error
} catch (error) {
  console.log(error);
}

console.log("A pesar del error, se sigue ejecutando el programa.");
