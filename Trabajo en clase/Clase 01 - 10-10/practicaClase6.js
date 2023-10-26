// Operador de propagación (...)
const peaks = ["Tallac", "Ralston", "Rose"];
const canyons = ["Ward", "Blackwood", "Rose"];
const tahoe = [...peaks, ...canyons];

console.log(tahoe);

// Si hago de la siguiente manera, tahoe será un arreglo compuesto de dos arreglos (peaks y canyons)
const peaks2 = ["Tallac", "Ralston", "Rose"];
const canyons2 = ["Ward", "Blackwood", "Rose"];
const tahoe2 = [peaks, canyons];

console.log(tahoe2);
