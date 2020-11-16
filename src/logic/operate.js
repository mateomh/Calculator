import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let result = new Big(0);
  const number1 = new Big(numberOne);
  const number2 = new Big(numberTwo);
  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
      break;
    case '%':
      result = number2 / 100.0;
      break;
    default:
  }

  return result;
}
