function characterRepeat(character, str) {
  var res = 0;
    for(var i = 0; i < str.length; i++) {
      if(str.charAt(i) === character) {
        res += 1;
      }
    }
    return res;
}

characterRepeat("e", "abacddbec");


function notRepeatCharacter(characters) {
  var result = "";
  for(var y = 0; y < characters.length; y++) {
    if(characterRepeat(characters.charAt(y), characters) === 1) {
      result = characters.charAt(y);
      break;
    }
  }
  return result;
}

console.log(notRepeatCharacter('abacddbec'));