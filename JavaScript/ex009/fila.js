const prompt = require("prompt-sync")();

const pacientes = ["Rita", " Marco"];
let fila = "";

const msg = prompt(
  `Olá, paciente! Nesse momento temos as seguintes pessoas na fila de espera: ${pacientes}`
);
console.log(msg);

function position(fila) {
  if (fila === "1" || fila === "2") {
    for (let i = 0; i < pacientes.length; i) {
      const elemento = pacientes[i];
      console.log(
        "O(a) paciente " + elemento + " encontra-se na posição " + ++i
      );
    }
  }
}

do {
  fila = prompt(
    "Selecione uma das opções abaixo:" +
      "\n1 - Adicionar novo paciente" +
      "\n2 - Consultar paciente" +
      "\n3 - Sair "
  );

  switch (fila) {
    case "1":
      const adicionar = pacientes.push(prompt("Qual nome do novo paciente?"));
      console.log(
        `O paciente ${adicionar} foi adicionado a lista de espera. Agora esses são os próximos pacientes: ${pacientes}`
      );
      position(fila);
      break;
    case "2":
      const consultarPaciente = pacientes.shift();
      console.log(
        `Você atendeu o paciente ${consultarPaciente}. Agora esses são os próximos pacientes: ${pacientes}`
      );
      position(fila);
      break;
    case "3":
      console.log("Você escolheu sair. O programa será encerrado!");
    default:
      if (fila > 3)
        console.log("Opção inválida! Por favor, digite uma opção válida.");
  }
} while (fila !== "3");

// console.log(pacientes);
// console.log(fila);
// console.log(msg);
