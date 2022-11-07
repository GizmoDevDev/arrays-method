const square = require('../src/squre')
const isEqualArrays = require('./isEqualArrays')

describe("Test square function", () => {
  test('Test simple array', () => {
    const array = [1, 2, 3, 4, -10];
    const squareArray = [1, 4, 9, 16, 100];
    const result = square(array);
    expect(isEqualArrays(squareArray, result)).toBeTruthy()
  })
})