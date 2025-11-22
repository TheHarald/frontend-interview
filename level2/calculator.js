class Calculator {

}

const calc = new Calculator(10);

const result = calc
  .add(5)
  .subtract(3)
  .multiply(2)
  .get();


console.log(result); // 24