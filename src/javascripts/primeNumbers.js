function IsPrimeNumber(number) {
  if (number <= 0) {
    return false;
  }

  var index, limit = Math.sqrt(number);

  for (index = 2; index <= limit; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;

}