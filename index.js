"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_1 = require("./src/Classe/Calculator");
const readline = __importStar(require("readline"));
var Operation;
(function (Operation) {
    Operation[Operation["Soma"] = 1] = "Soma";
    Operation[Operation["Subtracao"] = 2] = "Subtracao";
    Operation[Operation["Multiplicacao"] = 3] = "Multiplicacao";
    Operation[Operation["Divisao"] = 4] = "Divisao";
    Operation[Operation["Sair"] = 5] = "Sair";
})(Operation || (Operation = {}));
const calculadora = new Calculator_1.Calculator();
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
    rl.question("Digite o número da operação: ", (op) => {
        const operation = parseInt(op);
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
        rl.question("Digite o primeiro número: ", (firstNumberString) => {
            const firstNumber = Number(firstNumberString);
            rl.question("Digite o segundo número: ", (secondNumberString) => {
                const secondNumber = Number(secondNumberString);
                calculadora.setNumA(firstNumber);
                calculadora.setNumB(secondNumber);
                console.clear();
                let result;
                let operationName;
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
                }
                catch (error) {
                    console.log(error.message);
                }
                askForOperation();
            });
        });
    });
}
askForOperation();
