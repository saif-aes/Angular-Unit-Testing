import { LoggerService } from '../Logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('Calculator Service', () => {
  it('It should add two numbers', () => {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);

    const calc = new CalculatorService(mockLoggerService);
    const result = calc.add(2, 3);
    expect(result).toBe(5);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('It should subtract two numbers', () => {
    let loggerService = new LoggerService();

    spyOn(loggerService, 'log');
    const calc = new CalculatorService(loggerService);
    const result = calc.subtract(2, 3);
    expect(result).toBe(-1);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });
});
