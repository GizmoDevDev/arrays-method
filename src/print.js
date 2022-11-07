const printArray = (array) => {
  // for (let i = 0; i < array.length; i++) {
  //   console.log(array[i])
  // }

  array.forEach(item => console.log(item))
}

printArray([1,2,3,4,5,6])