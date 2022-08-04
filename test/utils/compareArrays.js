/**
 * This function is used for comparing two arrays
 * @param {Array} actualData actual data
 * @param {Array} expectedData expected data
 * @return {boolean} comparision result. True or false
 */
export default (actualData, expectedData) => {
  let result = true;
  if (actualData.length !== expectedData.length) {
    result = false;
  } else {
    actualData.forEach((element, index) => {
      if (element !== expectedData[index]) {
        result = false;
      }
    });
  }

  return result;
};
