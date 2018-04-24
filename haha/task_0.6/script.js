function amountOfStars(number) {
  const STAR = "*";
  let result = "";

  for(let i = 0; i < number; i++) {
      for(let y = 0; y <= i; y++) {
        result = result + STAR;
      }
      result = result + '\n';
  }
    return result;
}

console.log(amountOfStars(5));