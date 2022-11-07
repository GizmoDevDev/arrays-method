const getEven = require('../src/getEven')
const isEqualArrays = require('./isEqualArrays')

describe("Test getEven function", () => {
  test('Test simple array', () => {
    const array = [1, 2, 3, 4, -10];
    const evenArray = [2, 4, -10];
    const result = getEven(array);
    expect(isEqualArrays(evenArray, result)).toBeTruthy()
  })
})