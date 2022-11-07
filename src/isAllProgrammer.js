const isAllProgrammer = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].jobTitle !== 'programmer') return false;
  }
  return true;
}

module.exports = isAllProgrammer