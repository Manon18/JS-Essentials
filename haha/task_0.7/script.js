function radians_to_degrees(radians) {
  const ONE_P_RADIANS = 180;

  return radians * ONE_P_RADIANS / Math.PI;
}

console.log("0.7853981633974483 radians = " + radians_to_degrees(0.7853981633974483) + " degrees");