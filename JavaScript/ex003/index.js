const veic1 = prompt("Digite o nome do primeiro veículo:");
const vel1 = prompt("Digite a velocidade do primeiro veículo:");

const veic2 = prompt("Digite o nome do segundo veículo:");
const vel2 = prompt("Digite a velocidade do segundo veículo:");

if (vel1 > vel2) {
  alert(`O veículo ${veic1} é mais rápido que o veículo ${veic2}`);
} else if (vel1 < vel2) {
  alert(`O veículo ${veic2} é mais rápido que o veículo ${veic1}`);
} else {
  alert("As velocidades são iguais.");
}

// ou

const vencedor =
  vel1 > vel2
    ? `O veículo ${veic1} é mais rápido que o veículo ${veic2}`
    : vel1 < vel2
    ? `O veículo ${veic2} é mais rápido que o veículo ${veic1}`
    : "As velocidades são iguais.";

alert(vencedor);
