function pairNumbers(arrayNumbers) {
var result = [];
  for(var i = 0; i < arrayNumbers.length; i++) {
    if(arrayNumbers[i] % 2 === 0) {
        result.push(arrayNumbers[i]);
    }
  }

  return result;
} 

console.log(pairNumbers([1,5,23,4,2,5,6]));