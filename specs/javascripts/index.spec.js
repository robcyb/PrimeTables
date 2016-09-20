"use strict";

describe("A failing test suite", function () {
  it("fails", function () {
    expect(1).toBe(0);
  })
});

describe("A passing test suite", function () {
  it("passes", function () {
    expect(1).toBe(1);
  })
})