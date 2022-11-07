const getEven = (array) => {
  // const even = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] % 2 === 0) {
  //     even.push(array[i]);
  //   }
  // }
  // return even;

  return array.filter(item => item % 2 === 0)
}

module.exports = getEven