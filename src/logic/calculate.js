import operate from './operate';

export default function calculate(calculatorObj, buttonName) {
  let { next, total } = calculatorObj;
  const { operation } = calculatorObj;

  switch (buttonName) {
    case '+':
    case '-':
    case '/':
    case 'X':
    case '=':
      if (total !== '') {
        total = operate(total, next, operation);
      } else {
        total = next;
        next = '';
      }
      break;
    case '+/-':
      next = operate(next, -1, '*');
      break;
    case '%':
      total = operate(null, next, '%');
      next = '';
      break;
    case 'AC':
      total = '';
      next = '';
      break;
    default:
      next += buttonName;
      break;
  }

  return { next, total, operation };
}
