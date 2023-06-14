const express = require("express");
const path = require("path");

const checkListRouter = require("./src/routes/checklist");
const rootRouter = require("./src/routes/index");

require("./config/database");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use("/", rootRouter);
app.use("/checklists", checkListRouter);

app.listen(3000, () => {
  console.log("Servidor iniciado!");
});

// const log = (req, res, next) => {
//   console.log(req.body);
//   console.log(`Data: ${Date.now()}`);
//   next();
// };

// app.use(log);

// app.get("/", (req, res) => {
//   res.send("<h1>Minha lista de tarefas</h1>");
// });

// app.get("/json", (req, res) => {
//   res.json({ title: "Tarefa X", done: true });
// });
