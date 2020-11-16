import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let result = new Big(0.0);
  const number1 = new Big(numberOne);
  const number2 = new Big(numberTwo);
  switch (operation) {
    case '+':
      result = number1.plus(number2);
      break;
    case '-':
      result = number1.minus(number2);
      break;
    case 'X':
      result = number1.times(number2);
      break;
    case '/':
      result = number1.div(number2);
      break;
    case '%':
      result = number2.div(100.0);
      break;
    default:
  }

  return result.toString();
}
