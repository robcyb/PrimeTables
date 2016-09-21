"use strict";

describe("PrimeNumbers", function () {

  describe("PrimeNumbers calculations are working", function () {
    it("Returns true when a number is a prime number", function () {
      expect(IsPrimeNumber(2)).toBeTruthy();
      expect(IsPrimeNumber(11)).toBeTruthy();
      expect(IsPrimeNumber(101)).toBeTruthy();
    });

    it("Returns false when a number is not a prime number", function () {
      expect(IsPrimeNumber(4)).toBeFalsy();
      expect(IsPrimeNumber(12)).toBeFalsy();
      expect(IsPrimeNumber(100)).toBeFalsy();
    });

    it("Returns false when the input is less than 1", function () {
      expect(IsPrimeNumber(0)).toBeFalsy();
    });
  });

  describe("Generates N prime numbers", function () {
    it("Generates a fixed list of items based on input", function () {
      var expectedReturn = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
      expect(GeneratePrimes(10)).toEqual(expectedReturn);
    });
  });
})