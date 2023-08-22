const stringLength = require('../practice');

test('return the length of the string', () => {
  expect(stringLength('hello world!')).toBe(12);
})