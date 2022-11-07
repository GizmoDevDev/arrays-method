const sortArray = (array) => {
  // const result = [...array];
  // for (let i = 0; i < result.length; i++) {
  //   for (let j = i + 1; j < result.length; j++) {
  //     if (result[i] < result[j]) {
  //       const temp = result[i];
  //       result[i] = result[j];
  //       result[j] = temp;
  //     }
  //   }
  // }
  // return result;

  return array.sort((left, right) => right - left)
}

module.exports = sortArray;