function duplicateNumbers(arr) {
  var sort = arr.sort(function(a,b) {
    return a - b;
  });
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i+1]  && !newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(duplicateNumbers([1,4,25,4,16,9,25,8,1,8,16,2,3,2]));