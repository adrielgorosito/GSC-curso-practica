// Ejemplo de uso de una función
function greet(greeting: string, name: string): string {
  return greeting + " " + name + "!";
}

console.log(greet("Hello", "Steve"));

// Ejemplo de uso de una función con parámetro opcional
function greetConOpcional(greeting: string, name?: string): string {
  return greeting + " " + name + "!";
}

console.log(greetConOpcional("Hello"));
