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
const calculadora = new Calculator_1.Calculator();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Digite o primeiro número: ', (firstNumberString) => {
    const firstNumber = Number(firstNumberString);
    rl.question('Digite o segundo número: ', (secondNumberString) => {
        const secondNumber = Number(secondNumberString);
        calculadora.setNumA(firstNumber);
        calculadora.setNumB(secondNumber);
        const soma = calculadora.sum();
        const subtração = calculadora.subtraction();
        const multiplição = calculadora.multiplication();
        const divisão = calculadora.division();
        console.log(`O resultado da soma é: ${subtração}`);
        console.log(`O resultado da substração é: ${subtração}`);
        console.log(`O resultado da multiplição é: ${multiplição}`);
        console.log(`O resultado da divisão é: ${divisão}`);
        rl.close();
    });
});
