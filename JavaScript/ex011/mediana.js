const prompt = require("prompt-sync")();

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  const firstMedian = orderedNumbers[middle - 1];
  const secondMedian = orderedNumbers[middle];
  return (firstMedian + secondMedian) / 2;
};

const medianNum = prompt("Digite os números para ser calculado a mediana: ")
  .split(" ")
  .map(Number);

console.log(`Mediana: ${median(...medianNum)}`);
