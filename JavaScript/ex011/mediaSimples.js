const prompt = require("prompt-sync")();

const avarage = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
};

const numbers = prompt(
  "Digite os números desejados para calcular a média simples:"
)
  .split(" ")
  .map(Number);

console.log(`Média Aritmética Simples: ${avarage(...numbers)}`);

/*
Primeiro, a linha const prompt = require("prompt-sync")(); importa o módulo prompt-sync, que é utilizado para receber entrada do usuário pelo terminal.

Em seguida, temos a definição da função average com o uso de uma função arrow e o operador rest ... para permitir que a função aceite um número variável de argumentos.

Dentro da função, a linha const sum = numbers.reduce((accum, num) => accum + num, 0); utiliza o método reduce para somar todos os números passados como argumento na função.

A linha return sum / numbers.length; retorna a média aritmética simples dos números passados como argumento.

Na próxima linha, a constante numbers recebe os valores inseridos pelo usuário utilizando o método prompt e depois é encadeada a uma chamada ao método split(" ") para separar os números pelo espaço em branco e map(Number) para converter cada elemento do array em um número.

Por fim, a linha console.log(Média Aritmética Simples: ${avarage(numbers)}) imprime o resultado da média aritmética simples calculada com os números inseridos pelo usuário.
*/