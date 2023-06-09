const prompt = require("prompt-sync")();

const cartas = [];
const qtdCartas = prompt(`Atualmente o baralho possui ${cartas} cartas.`);
console.log(qtdCartas);

do {
  pilha = prompt(
    "Cartas no baralho: " +
      cartas.length +
      "\n1 - Adicionar uma nova carta" +
      "\n2 - Puxar uma nova carta" +
      "\n3 - Sair "
  );

  switch (pilha) {
    case "1":
      const adicionar = cartas.push(
        prompt("Qual carta você deseja adicionar?")
      );
      console.log(`Você adicionou a carta ${adicionar} ao baralho.`);
      break;
    case "2":
      const puxarCarta = cartas.pop();
      if (!puxarCarta) {
        console.log("Não há nenhuma carta no baralho!");
      } else {
        console.log(`Você puxou a carta ${puxarCarta}.`);
      }
      break;
    case "3":
      console.log("Você escolheu sair. O programa será encerrado!");
    default:
      if (pilha > 3)
        console.log("Opção inválida! Por favor, digite uma opção válida.");
  }
} while (pilha !== "3");
