function getMinMax(arr) {
  var max = arr[0];
  var min = arr[0];
  var obj = {};
  for(var i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i];
    }
    if(min > arr[i]) {
      min = arr[i];
    }
  }
  return {max, min};
}

console.log(getMinMax([1,92,-5,25]));