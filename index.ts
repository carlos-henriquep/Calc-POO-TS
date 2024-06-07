
import { Calculator } from "./src/Classe/Calculator";
import * as readline from 'readline';


const calculadora = new Calculator();


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question('Digite o primeiro número: ', (firstNumberString: string) => {
  const firstNumber: number = Number(firstNumberString);

  rl.question('Digite o segundo número: ', (secondNumberString: string) => {
    const secondNumber: number = Number(secondNumberString);

    
    calculadora.setNumA(firstNumber);
    calculadora.setNumB(secondNumber);

    
    const soma = calculadora.sum();
    const subtração = calculadora.subtraction();
    const multiplição = calculadora.multiplication();
    const divisão = calculadora.division();

    console.log(`O resultado da soma é: ${soma}`);
    console.log(`O resultado da substração é: ${subtração}`);
    console.log(`O resultado da multiplição é: ${multiplição}`);
    console.log(`O resultado da divisão é: ${divisão}`);
  
    rl.close();
  });
});




