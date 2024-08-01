abstract class Operation {
  constructor(public number1: number, public number2: number) {}

  abstract doOperation(): number;
}

class AddOperation extends Operation{
  constructor(number1: number, number2: number){
    super(number1, number2);
  }
  doOperation(){
   return this.number1 + this.number2;

  }
}
class MultiplayOperation extends Operation{
  constructor(number1:number, number2:number){
    super(number1, number2)
  }
  doOperation(){
    return this.number1 * this.number2

  }
}
let sum = new AddOperation(3,3);
console.log(sum.doOperation());
let mulTi = new MultiplayOperation(6,6);
console.log(mulTi.doOperation());