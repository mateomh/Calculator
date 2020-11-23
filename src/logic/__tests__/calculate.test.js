import Calculate from '../calculate';

test('1. MathError test', () => {
  const calculatorObj = {
    total: 'MathError',
    next: '',
    operation: '',
  };
  const buttonName = '';
  const result = Calculate(calculatorObj, buttonName);
  expect(result.total).toBe('');
});

test('2. Number(0-9) button press', () => {
  const calculatorObj = {
    total: '',
    next: '',
    operation: '',
  };
  let buttonName = '9';
  let result = Calculate(calculatorObj, buttonName);
  expect(result.next).toBe('9');
  buttonName = '8';
  result = Calculate(result, buttonName);
  expect(result.next).toBe('98');
});

test('3. Dot button press', () => {
  const calculatorObj = {
    total: '',
    next: '',
    operation: '',
  };
  let buttonName = '9';
  let result = Calculate(calculatorObj, buttonName);
  buttonName = '.';
  result = Calculate(result, buttonName);
  buttonName = '8';
  result = Calculate(result, buttonName);
  expect(result.next).toBe('9.8');
  expect(result.next).not.toBe('98');
});

test('4. double dot button press', () => {
  const calculatorObj = {
    total: '',
    next: '',
    operation: '',
  };
  let buttonName = '9';
  let result = Calculate(calculatorObj, buttonName);
  buttonName = '.';
  result = Calculate(result, buttonName);
  buttonName = '8';
  result = Calculate(result, buttonName);
  buttonName = '.';
  result = Calculate(result, buttonName);
  buttonName = '8';
  result = Calculate(result, buttonName);
  expect(result.next).toBe('9.88');
});

test('5. Operator button press when next is filled', () => {
  const calculatorObj = {
    total: '',
    next: '98',
    operation: '',
  };
  let buttonName = '+';
  let result = Calculate(calculatorObj, buttonName);
  buttonName = '5';
  result = Calculate(result, buttonName);
  buttonName = '4';
  result = Calculate(result, buttonName);
  expect(result.next).toBe('54');
  expect(result.operation).toBe('+');
  expect(result.total).toBe('98');
});

test('6. AC button clears everything', () => {
  const calculatorObj = {
    total: 'hola',
    next: 'como',
    operation: 'estas',
  };
  const buttonName = 'AC';
  const result = Calculate(calculatorObj, buttonName);
  expect(result.next).toBe('');
  expect(result.operation).toBe('');
  expect(result.total).toBe('');
});
