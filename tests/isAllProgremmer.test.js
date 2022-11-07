const isAllProgrammer = require('../src/isAllProgrammer')

describe("Test isAllProgrammer function", () => {
  test('Test all programmer', () => {
    const array = [
      {name: 'Name1', jobTitle: 'programmer'},
      {name: 'Name2', jobTitle: 'programmer'},
      {name: 'Name3', jobTitle: 'programmer'},
      {name: 'Name4', jobTitle: 'programmer'},
    ];
    expect(isAllProgrammer(array)).toBeTruthy()
  })

  test('Test not all programmer', () => {
    const array = [
      {name: 'Name1', jobTitle: 'docktor'},
      {name: 'Name2', jobTitle: 'programmer'},
      {name: 'Name3', jobTitle: 'programmer'},
      {name: 'Name4', jobTitle: 'programmer'},
    ];
    expect(isAllProgrammer(array)).toBeFalsy()
  })
})