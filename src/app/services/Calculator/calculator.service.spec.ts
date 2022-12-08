import { CalculatorService } from './calculator.service';

describe('Calculator Service', () => {
  it('It should add two numbers', () => {
    const calc = new CalculatorService();
    const result = calc.add(2, 3);
    expect(result).toBe(5);
  });

  it('It should subtract two numbers', () => {
    const calc = new CalculatorService();
    const result = calc.subtract(2, 3);
    expect(result).toBe(-1);
  });
});
