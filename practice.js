function stringLength(string) {
  const length = string.length;

  if (length < 1 || length > 10) {
    return new Error('String length must be between 1 and 10 characters.');
  }

  return length;
}

function reverseString(string) {
  let output = '';

  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }

  return output;
}

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    };

    return a / b;
  }
}

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = {
  stringLength,
  reverseString,
  Calculator,
  capitalize
};