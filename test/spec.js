var expect = require("chai").expect;
var func = require("../exercises.js");

describe("JS Fundamental Drills", function() {
  it("#doubleArray is a function that takes in an array of numbers and returns a new array with each number doubled.", function() {
    var doubleArray = func.doubleArray([1, 2, 3]);
    expect(doubleArray).to.deep.equal([2, 4, 6]);
  });
});
