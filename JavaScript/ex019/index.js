function imc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight !== "number" || typeof height !== "number") {
      reject("arguments must be of type number");
    } else {
      resolve(weight / (height * height));
    }
  });
}

function showImc(weight, height) {
  imc(weight, height)
    .then((result) => {
      console.log(`The result of the IMC is ${result}.`);

      if (result < 18.5) console.log("Status: THINNESS");
      else if (result < 25) console.log("Status: NORMAL");
      else if (result < 30) console.log("Status: OVERWEIGHT");
      else if (result < 40) console.log("Status: OBESITY");
      else console.log("Status: SERIOUS OBESITY");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("calculando...");
}

showImc(63, 1.63);
showImc(65, 1.63);
