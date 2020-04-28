import { Calculator } from './../src/Calculator';

describe('test_Calculator', () => {
  const calculator = new Calculator();
  test('add_2+3=5', () => {
    expect(calculator.add(2, 3)).toEqual(5);
  });
});
