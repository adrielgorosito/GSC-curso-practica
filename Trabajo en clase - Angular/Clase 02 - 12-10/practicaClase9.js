// Funciones con parámetros predeterminados
function logActivity(name = "Shane McConkey", activity = "skiing") {
  console.log(name, "loves", activity);
}

logActivity("Adriel", "swimming");
logActivity();
// Se puede utilizar undefined para dejar uno de los parámetros como predeterminado
console.log("--------------");
logActivity(undefined, "swimming");
logActivity("Adriel", undefined);
console.log("--------------");

// Ejemplo con objetos
function logActivity2({ name, favActivity } = defaultPerson) {
  console.log(name.first, "loves", favActivity);
}

const defaultPerson = {
  name: {
    first: "Shane",
    second: "McConkey",
  },
  favActivity: "skiing",
};

logActivity2();

logActivity2({
  name: {
    first: "Adriel",
    second: "Gorosito",
  },
  favActivity: "watching football",
});
