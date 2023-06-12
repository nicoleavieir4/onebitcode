const fs = require("fs");

//criando uma pasta e escrevendo o texto
fs.writeFile("test.txt", "Olá, NodeJS!",  err => {
  console.log(err)
}) 

//substituindo o texto do arquivo.
fs.appendFile("test.txt", "Olá, NodeJS! Como vai?", (err) => {
  console.log(err);
}); 

//renomeando o arquivo
fs.rename("test.txt", "test2.txt", err => {
  console.log(err)
});

//excluindo o arquivo
fs.unlink("test2.txt", (err) => console.log(err));
