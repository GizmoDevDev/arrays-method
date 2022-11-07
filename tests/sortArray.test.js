const sortArray = require('../src/sortArray')
const isEqualArrays = require('./isEqualArrays')

describe("Test sortArray function", () => {
  test('Test simple array', () => {
    const array = [1, 2, 3, 4, -10];
    const sortedArray = [4, 3, 2, 1, -10];
    const result = sortArray(array);
    expect(isEqualArrays(sortedArray, result)).toBeTruthy()
  })
})