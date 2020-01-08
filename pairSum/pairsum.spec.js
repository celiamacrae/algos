//mocha pairsum.spec.js

const { expect } = require('chai');
const pairSum = require('./pairsum');

describe('pairSum', () => {
  it('returns true if any 2 different numbers within the array add up to sum.', () => {
    expect(pairSum([1, 1, 2, 3, 4, 5], 7)).to.equal(true);
  });

  it('returns false if no 2 numbers in the array add up to sum', () => {
    expect(pairSum([1, 2, 3, 4, 5], 10)).to.equal(false);
    expect(pairSum([1, 2, 3, 7, 8], 7)).to.equal(false);
    expect(pairSum([1, 2, 3, 4, 5], 2)).to.equal(false);
  });

  it('returns false when passed in an empty array', () => {
    expect(pairSum([], 2)).to.equal(false);
  });

  it('returns false when there are fewer than two numbers in an array', () => {
    expect(pairSum([1], 2)).to.equal(false);
  });
});

