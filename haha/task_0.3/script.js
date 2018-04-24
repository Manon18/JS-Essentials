function convert(celsius) {
  const WATER_FREEZES_DEGREES = 32;
  const DIFFERENCE_SIMPLIFIED = 1.8;

  return (celsius * DIFFERENCE_SIMPLIFIED) + WATER_FREEZES_DEGREES;
}
console.log("10 degrees Celsius = " + convert(10) + " degrees Fahrenheit");