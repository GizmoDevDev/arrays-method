const isSomeNegative = require('../src/isSomeNegative')

describe("Test isSomeNegative function", () => {
  test('Test doesnt have negative', () => {
    const array = [0, 4, 5, 1, 99];
    expect(isSomeNegative(array)).toBeFalsy()
  })

  test('Test have some negative', () => {
    const array = [-1, 1, 1, 44];
    expect(isSomeNegative(array)).toBeTruthy();
  })
})