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
})