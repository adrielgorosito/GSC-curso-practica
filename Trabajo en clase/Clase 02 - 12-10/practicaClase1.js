// Operador de propagación (...)
function directions(...args) {
  let [start, ...remaining] = args;
  let [finish, ...stops] = remaining.reverse();

  console.log("drive through", args.length, "towns");
  console.log("start in", start);
  console.log("the destination is", finish);
  console.log("stopping", stops.length, "times in betweeen");
}

directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");
