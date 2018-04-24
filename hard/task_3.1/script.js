function recursionFunc(number){
  if(number >= 0) {
    console.log(number);
    recursionFunc(number - 1);
  }
}
recursionFunc(10);