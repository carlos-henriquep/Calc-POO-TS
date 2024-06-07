"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    getNumA() {
        return this._numA;
    }
    getNumB() {
        return this._numB;
    }
    setNumA(num) {
        this._numA = num;
    }
    setNumB(num) {
        this._numB = num;
    }
    sum() {
        return this._numA + this._numB;
    }
    subtraction() {
        return this._numA - this._numB;
    }
    multiplication() {
        return this._numA * this._numB;
    }
    division() {
        if (this._numB === 0) {
            throw new Error("Divisão por zero não é permitida");
        }
        return this._numA / this._numB;
    }
}
exports.Calculator = Calculator;
