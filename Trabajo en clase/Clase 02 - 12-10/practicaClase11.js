// Pasaje por valor que simula un pasaje por referencia
function callByReference(varObj) {
  varObj.a = 100;
  console.log(varObj.a);
}

let varObj = {
  a: 1,
};

console.log(varObj);
callByReference(varObj);
console.log(varObj);
