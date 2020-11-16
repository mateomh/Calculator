import operate from './operate';

export default function calculate(calculatorObj, buttonName) {
  let { next, total, operation } = calculatorObj;

  switch (buttonName) {
    case '+':
    case '-':
    case '/':
    case 'X':
    case '=':
      if (next !== '') {
        total = operate(total, next, operation);
      } else {
        next = total;
        total = '';
        operation = buttonName;
      }
      break;
    case '+/-':
      total = operate(total, -1, 'X');
      break;
    case '%':
      total = operate(null, total, '%');
      next = '';
      break;
    case 'AC':
      total = '';
      next = '';
      break;
    default:
      total += buttonName;
      break;
  }

  return { next, total, operation };
}
