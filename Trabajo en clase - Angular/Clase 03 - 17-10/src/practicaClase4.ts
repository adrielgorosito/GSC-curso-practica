// Adaptación de un código en js a ts
const button = document.querySelector("button");
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button?.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

// Formas de declarar una variable
let a: number = 5;
let b = 5; // Ambas son correctas, pero esta se considera buena práctica
