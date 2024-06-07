import { Calculator } from "./src/Classe/Calculator";
import * as readline from "readline";

enum Operation {
  Soma = 1,
  Subtracao,
  Multiplicacao,
  Divisao,
  Sair,
}

const calculadora = new Calculator();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();
console.log("Bem-vindo à Calculadora!");

function askForOperation() {
  console.log(`
  Escolha uma operação:
  1. Soma
  2. Subtração
  3. Multiplicação
  4. Divisão
  5. Sair
   `);

  rl.question("Digite o número da operação: ", (op: string) => {
    const operation = parseInt(op) as Operation;

    console.clear();

    if (operation === Operation.Sair) {
      console.clear();
      console.log("Finalizando calculadora...");
      rl.close();
      return;
    }

    if (!Object.values(Operation).includes(operation)) {
      console.log("Operação inválida. Tente novamente.");
      askForOperation();
      return;
    }

    rl.question("Digite o primeiro número: ", (firstNumberString: string) => {
      const firstNumber: number = Number(firstNumberString);

      rl.question("Digite o segundo número: ", (secondNumberString: string) => {
        const secondNumber: number = Number(secondNumberString);

        calculadora.setNumA(firstNumber);
        calculadora.setNumB(secondNumber);

        console.clear();
        let result: number;
        let operationName: string;

        try {
          switch (operation) {
            case Operation.Soma:
              result = calculadora.sum();
              operationName = "Soma";
              break;
            case Operation.Subtracao:
              result = calculadora.subtraction();
              operationName = "Subtração";
              break;
            case Operation.Multiplicacao:
              result = calculadora.multiplication();
              operationName = "Multiplicação";
              break;
            case Operation.Divisao:
              result = calculadora.division();
              operationName = "Divisão";
              break;
            default:
              console.log("Operação inválida");
              askForOperation();
              return;
          }
          console.log(`O resultado da ${operationName} é: ${result}`);
        } catch (error) {
          console.log(error.message);
        }

        askForOperation();
      });
    });
  });
}

askForOperation();
