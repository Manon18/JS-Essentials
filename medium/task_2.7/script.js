function rand(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(rand(20, 1));