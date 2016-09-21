function IsPrimeNumber(number) {

  if (number <= 0) {
    return false; // only return when number is a positive number - as per specification.
  }

  var index, limit = Math.sqrt(number); // whole numbers only - as per specification.

  for (index = 2; index <= limit; index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;

}

function GeneratePrimes(length) {

}