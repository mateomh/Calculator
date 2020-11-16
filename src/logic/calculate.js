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
        total = operate(next, total, operation);
        next = '';
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
      total = operate(total, 0, '%');
      next = '';
      break;
    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;
    default:
      if (buttonName === '.' && total.includes('.')) {
        break;
      }
      total += buttonName;
  }

  return { next, total, operation };
}
