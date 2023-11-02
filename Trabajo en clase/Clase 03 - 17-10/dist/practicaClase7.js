"use strict";
// Ejemplo de Enum
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
let admin1 = {
    rol: Role.Admin,
    nombre: "Adriel",
};
console.log(admin1);
var Numeros;
(function (Numeros) {
    Numeros[Numeros["Uno"] = 1] = "Uno";
    Numeros[Numeros["Dos"] = 2] = "Dos";
    Numeros[Numeros["Tres"] = 3] = "Tres";
    Numeros[Numeros["Cuatro"] = 1] = "Cuatro";
})(Numeros || (Numeros = {}));
console.log(Numeros[1]);
