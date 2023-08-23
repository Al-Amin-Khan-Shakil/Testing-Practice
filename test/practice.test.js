const {
  stringLength,
  reverseString,
  Calculator,
  capitalize
} = require('../practice');

describe('tests for string', () => {
  describe('test string length', () => {
    test('returns the correct length of the string', () => {
      expect(stringLength('hello')).toBe(5);
    });
    
    test('throws an error for strings shorter than 1 character', () => {
      expect(stringLength('')).toBeInstanceOf(Error);
      expect(stringLength('').message).toBe('String length must be between 1 and 10 characters.');
    });
    
    test('throws an error for strings longer than 10 characters', () => {
      expect(stringLength('thisisalong')).toBeInstanceOf(Error);
      expect(stringLength('thisisalong').message).toBe('String length must be between 1 and 10 characters.');
    });
  });
  
  describe('test reverse string', () => {
    test('return the reverse string', () => {
      expect(reverseString('shakil')).toBe('likahs');
    });
  });
});

describe('Test of calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  })

  describe('add function test', () => {
    it('Adds two numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(-1, 1)).toBe(0);
      expect(calculator.add(0, 0)).toBe(0);
      expect(calculator.add(-2, -3)).toBe(-5);
      expect(calculator.add(2, -3)).toBe(-1);
    });
  });

  describe('subtract function test', () => {
    it('Subtracts two numbers correctly', () => {
      expect(calculator.subtract(3, 2)).toBe(1);
      expect(calculator.subtract(1, 3)).toBe(-2);
      expect(calculator.subtract(0, 0)).toBe(0);
      expect(calculator.subtract(-3, -2)).toBe(-1);
      expect(calculator.subtract(-3, 2)).toBe(-5);
    });
  });

  describe('multiply function test', () => {
    it('Multiply two numbers correctly', () => {
      expect(calculator.multiply(3, 2)).toBe(6);
      expect(calculator.multiply(-3, 2)).toBe(-6);
      expect(calculator.multiply(3, -2)).toBe(-6);
      expect(calculator.multiply(3, 0)).toBe(0);
      expect(calculator.multiply(-3, 0)).toBe(-0);
      expect(calculator.multiply(0, 3)).toBe(0);
      expect(calculator.multiply(0, -3)).toBe(-0);
      expect(calculator.multiply(0, 0)).toBe(0);
    });
  });

  describe('divide function test', () => {
    it('Show an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
    });

    it('Divide two numbers corretly', () => {
      expect(calculator.divide(8, 2)).toBe(4);
      expect(calculator.divide(8, -2)).toBe(-4);
      expect(calculator.divide(-8, 2)).toBe(-4);
      expect(calculator.divide(4, 8)).toBe(0.5);
    })
  });
});

describe('test capitalize function', () => {
  it('Return string with capitalize 1st letter', () => {
    expect(capitalize('shakil')).toBe('Shakil');
  })
})