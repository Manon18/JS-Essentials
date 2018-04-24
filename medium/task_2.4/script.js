function toUpperCaseFirstLetter(words) {
  var res = "" + words.charAt(0).toUpperCase();
  for(var i = 1; i < words.length; i++) {
      if(words.charAt(i-1) === " "){
        res += words.charAt(i).toUpperCase();
      } else {
        res += words.charAt(i);
      }
  }
  return res;
}

console.log(toUpperCaseFirstLetter("the quick brown fox"));