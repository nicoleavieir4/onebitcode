const prompt = require("prompt-sync")();

const word = prompt("Informe uma palavra: ")
let inverseWorld = ""

for (let i = word.length -1; i >= 0; i--) {
  inverseWord += word[i]
}

if (word === inverseWord) {
  console.log(word + " é um palíndromo!")
}else {
  console.log(word + " não é um palíndromo!\n\n" + word + " !== " + inverseWord);
}