const prompt = require("prompt-sync")();

const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

const modeNum = prompt("Digite os números para ser calculado a moda: ")
  .split(" ")
  .map(Number);

console.log(`Moda: ${mode(...modeNum)}`);
