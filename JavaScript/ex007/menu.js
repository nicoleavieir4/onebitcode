const prompt = require("prompt-sync")();

let opcao = "5"

do {
  opcao = prompt(
    "Qual prato você deseja?" +
      "\n1 - Lasanha" +
      "\n2 - Omelete" +
      "\n3 - Carne assada " +
      "\n4 - Frango assado" +
      "\n5 - Encerrar"
  );

  switch (opcao) {
    case "1":
      console.log("O prato escolhido foi: Lasanha!");
      break;
    case "2":
      console.log("O prato escolhido foi: Omelete!");
      break;
    case "3":
      console.log("O prato escolhido foi: Carne assada!");
      break;
    case "4":
      console.log("O prato escolhido foi: Frango assado!");
      break;
    case "5":
      console.log("O sistema será encerrado!");
      break;
    default:
      alert("Opção inválida!");
      break;
  }

} while (opcao !== "5");