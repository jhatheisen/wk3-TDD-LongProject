function myMap(inputArray, callback) {

  // mutates
  // console.log(inputArray);
  // for(let i = 0; i < inputArray.length; i++) {
  //   inputArray[i] = callback(inputArray[i]);
  // }
  // console.log(inputArray)
  // return inputArray;

  let newArr = [];

  for(let el of inputArray) {
    newArr.push(callback(el));
  }

  return newArr;

  // return inputArray.map(callback);
}

module.exports = myMap;
