// Promesas
/*  Tienen 3 estados: pendiente, resuelta o rechazada.
    Métodos de las promesas:
    * .then(función resolve): ejecuta la función 'resolve' cuando la promesa se cumple
    * .catch(función reject): ejecuta la función 'reject' cuando la promesa se rechaza
    * .then(función resolve, función reject): ejecuta la correspondiente función dependiendo de qué ocurre
    * .finally(función end): ejecuta la función 'end' tanto si se cumple como si se rechaza
*/

const promise = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) {
    setTimeout(() => resolve("Promise is resolved!"), 300);
  } else {
    reject("Promise is rejected!");
  }
});

// El primer parámetro de then ocurrirá si se cumple la promesa, el segundo si se rechaza
promise.then(
  (result) => console.log(result),
  (result) => console.log(result)
);

// Ejemplo con asincronismo
function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function main() {
  console.log("main");

  setTimeout(f1, 0);

  new Promise((resolve, reject) => resolve("I am a promise")).then((resolve) =>
    console.log(resolve)
  );

  f2();
}

main();
