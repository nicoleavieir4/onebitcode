const process = require("process");

//console.log(process.argv)
console.log("Digite o seu nome?");

process.stdin.on("data", (keyboard) => {
  process.stdout.write(`Nome do usuário: ${keyboard}`);
  process.exit();
});
