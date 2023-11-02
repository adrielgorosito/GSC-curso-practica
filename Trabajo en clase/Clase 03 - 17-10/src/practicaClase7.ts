// Ejemplo de Enum
enum Role {
  Employee,
  Manager,
  Admin,
}

let admin1 = {
  rol: Role.Admin,
  nombre: "Adriel",
};

console.log(admin1);

enum Numeros {
  Uno = 1,
  Dos = 2,
  Tres = 3,
  Cuatro = 1,
}

console.log(Numeros[1]);
