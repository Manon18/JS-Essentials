function average(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  var result = 0;
  var getAverageArr = [];

  result = +(sum / arr.length).toFixed(2);
  getAverageArr.push(result);

  return getAverageArr;
}

console.log(average([1,4,2]));

