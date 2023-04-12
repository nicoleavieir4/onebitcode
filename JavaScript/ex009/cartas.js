const prompt = require("prompt-sync")();

const init = +prompt("Digite quantas cartas o baralho possui atualmente: ");

const qtdCartas = prompt(`Atualmente o baralho possui ${init} cartas.`);
console.log(qtdCartas);

const cartas = [];

do {
  pilha = prompt(
    "Selecione uma das opções abaixo:" +
      "\n1 - Adicionar uma nova carta" +
      "\n2 - Puxar uma nova carta" +
      "\n3 - Sair "
  );

  switch (pilha) {
    case "1":
      const adicionar = cartas.unshift(
        prompt("Qual carta você deseja adicionar?")
      );
      console.log(`Você adicionou a carta ${adicionar} ao baralho.`);
      break;
    case "2":
      const puxarCarta = cartas.shift();
      console.log(`Você puxou a carta ${puxarCarta}.`);
      break;
    case "3":
      console.log("Você escolheu sair. O programa será encerrado!");
    default:
      if (pilha > 3)
        console.log("Opção inválida! Por favor, digite uma opção válida.");
  }
} while (pilha !== "3");
