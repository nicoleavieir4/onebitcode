/*
Comece perguntando pela quantidade inicial de dinheiro disponível e então,
mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. 
Ao clicar na opção de adicionar dinheiro o programa deve
perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então
mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover
dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.
*/

const prompt = require("prompt-sync")();

let saldo = +prompt("Qual valor inicial disponível?");

console.log(`A quantidade inicial em reais é de R$${saldo},00.`);

do {
  valor = prompt(
    "Você deseja adicionar ou remover valores do seu saldo?" +
      "\n1 - Adicionar" +
      "\n2 - Remover" +
      "\n3 - SAIR "
  );

  switch (valor) {
    case "1":
      const adicionar = +prompt("Qual valor você deseja adicionar?");
      console.log(
        `Você decidiu adicionar R$${adicionar},00 ao seu saldo e agora você possui: R$${(saldo +=
          adicionar)},00.`
      );
      break;
    case "2":
      const remover = +prompt("Qual valor você deseja remover?");
      console.log(
        `Você decidiu remover R$${remover},00 do seu saldo e agora você possui: R$${(saldo -=
          remover)},00`
      );
      break;
    case "3":
      console.log("Você escolheu sair. O programa será encerrado!");
    default:
      if (valor > 3)
      console.log("Opção inválida! Por favor, digite uma opção válida.");
  }
} while (valor !== "3");
