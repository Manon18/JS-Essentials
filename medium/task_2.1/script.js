function reverseNumbers(numbers) {
  var str = "" + numbers;
  var result = "";
  for(var i = str.length; i >= 0; i--) {
    result += str.charAt(i);
  }
  return parseInt(result);
}

console.log(reverseNumbers(32243));