//mocha nthfibonacci.spec.js

const { expect } = require('chai');
const nthFib = require('./nthfibonacci');

describe('nthFib', () => {
  it('returns the nth fibonacci number.', () => {
    expect(nthFib(6)).to.equal(5);
    expect(nthFib(3)).to.equal(1);
    expect(nthFib(8)).to.equal(13);
    expect(nthFib(1)).to.equal(0);
  });
});



