const sum = (array) => {
  // let result = 0;
  // for (let i = 0; i < array.length; i++) {
  //   result += array[i];
  // }
  // return result;

  return array.reduce((acc, item) => acc + item)
}

module.exports = sum;