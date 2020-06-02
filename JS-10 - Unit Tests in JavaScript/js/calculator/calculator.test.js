const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});
 
test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//## Part 2: Implement Calculator test

//1. Implement 2 unit tests for the *divide* function.
test('divide 366 by 6 to equal 61', () => {
  expect(calculator.divide(366, 6)).toBe(61);
});

test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

//2. Implement 2 unit tests for the *multiply* function.
test('multiply 8 * 36 to 288', () => {
  expect(calculator.multiply(8, 36)).toBe(288);
});

test('multiply 12 * 4 to equal Infinity', () => {
  expect(calculator.multiply(12, 4)).toBe(48);
});

// Challenge - Divide
test('divide 5 / 0 to equal 5', () => {
  expect(calculator.divide(5, 0)).toBe(5);
});