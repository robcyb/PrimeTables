"use strict";

describe("PrimeNumbers", function () {
  it("Returns true when a number is a prime number", function () {
    expect(IsPrimeNumber(2).toBeTruthy());
  });

  it("Returns false when a number is not a prime number", function () {
    expect(IsPrimeNumber(4).toBeFalsy());
  });

  it("Returns false when the input is less than 1", function () {
    expect(IsPrimeNumber(0).toBeFalsy());
  });
})