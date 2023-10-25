/*  Ejercicio 5: 
    Queremos realizar cálculos usando funciones y obtener los resultados. Los requerimientos son:
    • Debe haber una función para cada número del 0 (”cero”) al 9 (”nueve”)
    • Debe haber una función para cada una de las siguientes operaciones matemáticas: suma, resta, multiplicación y división
    • Cada cálculo consta exactamente de una operación y dos argumentos (números)
    • La función externa representa el operando izquierdo, la función interna representa el operando derecho
    • La división debe ser una división entera. Por ejemplo, el resultado debería ser 2 y no 2.666666...
*/

function zero(op) {
  return op ? op(0) : 0;
}

function one(op) {
  return op ? op(1) : 1;
}

function two(op) {
  return op ? op(2) : 2;
}

function three(op) {
  return op ? op(3) : 3;
}

function four(op) {
  return op ? op(4) : 4;
}

function five(op) {
  return op ? op(5) : 5;
}

function six(op) {
  return op ? op(6) : 6;
}

function seven(op) {
  return op ? op(7) : 7;
}

function eight(op) {
  return op ? op(8) : 8;
}

function nine(op) {
  return op ? op(9) : 9;
}

function times(num2) {
  return (num1) => num1 * num2;
}

function plus(num2) {
  return (num1) => num1 + num2;
}

function minus(num2) {
  return (num1) => num1 - num2;
}

function dividedBy(num2) {
  return (num1) => num2 == 0 ? "Error, división por cero." : Math.trunc(num1 / num2);
}

console.log("6 * 5 (debería devolver 35):", seven(times(five())));
console.log("4 + 9 (debería devolver 13):", four(plus(nine())));
console.log("8 - 3 (debería devolver 5):", eight(minus(three())));
console.log("6 / 2 (debería devolver 3):", six(dividedBy(two())));