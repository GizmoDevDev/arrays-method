const isSomeNegative = (array) => {
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] < 0) return true;
  // }
  // return false;

  return array.some(item => item < 0)
}

module.exports = isSomeNegative;