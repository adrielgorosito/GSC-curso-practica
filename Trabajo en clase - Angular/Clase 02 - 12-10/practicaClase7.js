// For-of con Set
let text = "Na na na na na na na na Batman!";
console.log(text.split("a"));

let wordSet = new Set(text.split("a"));
console.log(wordSet);

let unique = [];
for (let word of wordSet) {
  unique.push(word);
}

console.log(unique);
