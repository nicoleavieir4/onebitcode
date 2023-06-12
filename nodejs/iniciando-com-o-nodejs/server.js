const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.statusCode = 200;
  res.end("<h1>Hello World</h1>");
});

server.listen(3000, () => {
  //porta 3000 geralmente de desenvolvimento
  console.log("Servidor ativo!");
});
