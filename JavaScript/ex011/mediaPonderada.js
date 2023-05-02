const prompt = require("prompt-sync")();

const weightAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  );
  const weightSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  );
  return sum / weightSum;
};

const entriesSum = prompt(
  "Digite os números desejados para calcular a média ponderada no formato 'numero:peso numero:peso ...':"
);

// converter a string de entrada em um array de objetos
const entries = entriesSum.split(" ").map((entry) => {
  const [number, weight] = entry.split(":");
  return { number: Number(number), weight: Number(weight) };
});

console.log(`Média Ponderada: ${weightAverage(...entries)}`);
