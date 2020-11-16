import operate from './operate';

export default function calculate(calculatorObj, buttonName) {
  let { next, total } = calculatorObj;
  const { operation } = calculatorObj;

  switch (buttonName) {
    case '+':
    case '-':
    case '/':
    case '*':
    case '=':
      if (total !== null) {
        total = operate(total, next, operation);
      } else {
        total = next;
        next = null;
      }
      break;
    case '+/-':
      next = operate(next, -1, '*');
      break;
    case '%':
      total = operate(null, next, '%');
      next = null;
      break;
    case 'AC':
      total = null;
      next = null;
      break;
    default:
      next += buttonName;
      break;
  }

  return { next, total, operation };
}
