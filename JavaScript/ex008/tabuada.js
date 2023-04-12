const prompt = require("prompt-sync")();

const numero = +(prompt("Escolha um número a ser multiplicado: "))
let resultado = ""

for (fator = 1 ; fator <=20; fator++) {
  resultado += " -> " + numero + " * " + fator + " = " + (numero * fator) + "\n"
}

console.log("Resultado da tabuada de " + numero + ":\n\n" + resultado)