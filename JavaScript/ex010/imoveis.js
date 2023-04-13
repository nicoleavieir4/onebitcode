const prompt = require("prompt-sync")();

const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem-vindo ao cadastro de imóveis!" +
      "Total de imóveis: " +
      imoveis.length +
      "\n\nSelecione uma das opções abaixo:" +
      "\n1 - Adicionar novo imóvel" +
      "\n2 - Listar imóveis cadastrados" +
      "\n3 - Sair "
  );
  switch (opcao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Digite o nome do proprietário: ");
      imovel.quartos = +prompt("Digite a quantidade de quartos: ");
      imovel.banheiros = +prompt("Digite a quantidade de banheiros: ");
      imovel.garagem = prompt("Possui garagem? Sim/Não");

      imoveis.push(imovel);

      /*

      USABILIDADE NO NAVEGADOR:

      const confirm = confirm(
        "Salvar este imóvel?\n" +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.banheiros +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui garagem? " +
          imovel.garagem
      );
      "\nProprietário: " + imoveis[i].proprietario;

      if (confirm) {
        imoveis.push(imovel);
      }
      */

      break;

    case "2":
      for (let i = 0; i < imoveis.length; i++)
        console.log(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui garagem? " +
            imoveis[i].garagem
        );
      break;
    case "3":
      console.log("Você escolheu sair. O programa será encerrado!");
    default:
      if (imoveis > 3)
        console.log("Opção inválida! Por favor, digite uma opção válida.");
  }
} while (opcao !== "3");
