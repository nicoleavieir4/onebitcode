const prompt = require("prompt-sync")();

const world = prompt("Informe uma palavra: ")
let inverseWorld = ""

for (let i = world.length -1; i >= 0; i--) {
  inverseWorld += world[i]
}

if (world === inverseWorld) {
  console.log(world + " é um palíndromo!")
}else {
  console.log(world + " não é um palíndromo!\n\n" + world + " !== " + inverseWorld);
}