import operate from './operate';

export default function calculate(calculatorObj, buttonName) {
  let { next, total, operation } = calculatorObj;

  switch (buttonName) {
    case '+':
    case '-':
    case '/':
    case 'X':
    case '=':
      if (total !== '' && next !== '') {
        total = operate(total, next, operation);
        next = '';
        if (buttonName === '=') {
          operation = '';
        } else {
          operation = buttonName;
        }
      } else if (total !== '' && next === '') {
        operation = buttonName;
      } else {
        total = next;
        next = '';
        operation = buttonName;
      }
      break;
    case '+/-':
      next = operate(next, -1, 'X');
      break;
    case '%':
      if (next !== '') {
        total = operate(next, 0, '%');
        next = '';
      }
      break;
    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;
    default:
      if (buttonName === '.' && next.includes('.')) {
        break;
      }
      next += buttonName;
  }

  return { next, total, operation };
}
