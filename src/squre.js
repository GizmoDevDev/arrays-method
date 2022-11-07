const square = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * array[i])
  }
  return result
}

module.exports = square