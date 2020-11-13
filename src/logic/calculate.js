export default function calculate(calculatorObj, buttonName) {
  const resultObj = calculatorObj;
  if (buttonName === '=') {
    switch (calculatorObj.operator) {
      case '+':
        resultObj.total += resultObj.next;
        break;
      case '-':
        console.log('resta');
        resultObj.total -= resultObj.next;
        break;
      case 'X':
        console.log('multiplicacion');
        resultObj.total *= resultObj.next;
        break;
      case '/':
        console.log('division');
        resultObj.total /= resultObj.next;
        break;
      case '+/-':
        console.log('mas menos');
        resultObj.total += resultObj.next;
        break;
      case '%':
        console.log('porcentaje');
        break;
      default:
    }
  } else if (buttonName === '+/-') {
    resultObj.total *= -1;
    resultObj.next *= -1;
  } else {
    resultObj.total = resultObj.next;
    resultObj.next = 0;
  }
  return resultObj;
}
