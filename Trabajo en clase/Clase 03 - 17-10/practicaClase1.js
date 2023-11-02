// Funciones asincrónicas y funciones callback
function f1() {
  console.log("Código asíncrono.");
}
function f2() {
  console.log("f2");
}
function main() {
  console.log("main");
  setTimeout(f1, 1000);
  f2();
}

main();

// setTimeout en forma de arrow function
setTimeout(() => console.log("Arrow function"), 2000);
