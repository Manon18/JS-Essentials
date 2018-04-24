function convert(amount, currency) {
  const EXCHANGE_RATE = 26.1;
  
  if(currency === "usd") {
    return amount * EXCHANGE_RATE;
  } else if (currency === "uah") {
    return amount / EXCHANGE_RATE;
  } else {
    return undefined;
  }
}

console.log("10 uah is " + (convert(10, "uah", "usd")).toFixed(2) + " usd");
console.log("500 usd is " + convert(500, "usd", "uah") + " uah");