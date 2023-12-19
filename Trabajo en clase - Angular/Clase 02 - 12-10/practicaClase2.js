// Operador de propagación (...)
const morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly",
};

const dinner = "mac and cheese";

const backpackingMeals = {
  ...morning,
  dinner,
};

console.log(backpackingMeals);

// Sin usar el operador de propagación:
const morning2 = morning;
morning2.dinner = dinner;

console.log(morning2);
