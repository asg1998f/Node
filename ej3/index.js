const logplease = require("logplease");
const numeros = require("./numeros");

// Llamando a la función esPar con diferentes valores
const numbersToCheck = [2, 3, 101, 201, 202, 100];

numbersToCheck.forEach(number => {
  if (numeros.esPar(number)) {
    logplease.info(`El número ${number} es par`);
  } else {
    logplease.error(`El número ${number} no es par`);
  }
});
