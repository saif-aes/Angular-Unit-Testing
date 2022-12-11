import { CalculatorService } from './calculator.service';

describe('Calculator Service', () => {
  let mockLoggerService: any;
  let calc: any;

  beforeEach(() => {
    console.log('calling beforeEach');
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calc = new CalculatorService(mockLoggerService);
  });

  it('It should add two numbers', () => {
    console.log('calling add');

    const result = calc.add(2, 3);
    expect(result).toBe(5);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('It should subtract two numbers', () => {
    console.log('calling subtract');

    const result = calc.subtract(2, 3);
    expect(result).toBe(-1);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
