const sum = require('../src/sum')

describe("Test sum function", () => {
  test('Test simple array', () => {
    const array = [1, 2, 3, 4, -10];
    const arraySum = 0;
    const result = sum(array);
    expect(result).toBe(arraySum)
  })
})