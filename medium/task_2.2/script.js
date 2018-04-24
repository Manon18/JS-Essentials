function reverseWord(words) {
  var result = "";
  for(var i = words.length; i >= 0; i--) {
    result += words.charAt(i);
  }
  return result;
}

console.log(reverseWord("hello world"));


