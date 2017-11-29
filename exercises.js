function doubleArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

module.exports = {
  doubleArray: doubleArray
};
