const nome = prompt("Qual seu primeiro nome?");
const sobrenome = prompt("Qual seu sobrenome?");
const estudos = prompt("Qual seu campo de estudos?");
const nascimento = prompt("Qual seu ano de nascimento?");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    nome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    estudos +
    "\nIdade: " +
    (2022 - nascimento)
);
