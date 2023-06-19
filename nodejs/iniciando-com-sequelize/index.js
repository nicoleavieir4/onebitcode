const express = require("express");
const routes = require("./routes");

require("../config/associations");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);

(async () => {
  const Planet = require("./models/Planet");

  const newPlanet = await Planet.create({
    name: "Terra",
    position: 3,
  });

  const seePlanets = await Planet.findAll(); // consulta todos planetas cadastrados no banco de dados
  // const seePlanets = await Planet.findByPk(1); // cosulta por id

  // const seePlanets = await Planet.findAll({
  //   where: {
  //     name: "Terra",
  //   },
  // }); // consulta todos planetas cadastrados com o nome "Terra" no banco de dados

  const updatePlanets = await Planet.findByPk(1);
  updatePlanets.name = "Venus";
  await updatePlanets.save();

  const deletePlanets = await Planet.findByPk(1);

  console.log(deletePlanets);
  await deletePlanets.destroy();
})();
