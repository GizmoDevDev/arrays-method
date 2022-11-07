const isAllProgrammer = (array) => {
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i].jobTitle !== 'programmer') return false;
  // }
  // return true;

  return array.every(({ jobTitle }) => jobTitle === 'programmer');
}

module.exports = isAllProgrammer