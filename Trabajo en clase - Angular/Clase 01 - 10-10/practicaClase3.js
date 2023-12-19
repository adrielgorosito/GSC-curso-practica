// Desestructuración de argumentos de funciones

// Original
const lordify = function (regularPerson) {
  console.log(regularPerson.firstName + " of Canterbury");
};

const regularPerson = {
  firstName: "Bill",
  lastName: "Wilson",
};

lordify(regularPerson);

// Desestructuración
const lordify2 = function ({ firstName2 }) {
  console.log(firstName2 + " of Canterbury");
};

const regularPerson2 = {
  firstName2: "Bill",
  lastName2: "Wilson",
};

lordify2(regularPerson2);
