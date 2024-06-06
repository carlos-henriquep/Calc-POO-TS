export class Calculator {
    private _numA: number;
    private _numB: number;


    public getNumA(): number{
        return this._numA;
    }

    public getNumB(): number{
        return this._numB;
    }

   public setNumA(num: number): void{
    this._numA = num;
   }

   public setNumB(num: number): void{
    this._numB = num;
   }

   public sum(): number{
    return this._numA + this._numB;
   }

   public subtraction(): number {
    return this._numA - this._numB
   }

   public multiplication(): number {
    return this._numA * this._numB
   }

   public division(): number {
    if(this._numB === 0){
        throw new Error("Divisão por zero não é permitida")
    }
    return this._numA / this._numB
   }
}