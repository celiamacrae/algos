//mocha uniquepaths.spec.js

const { expect } = require('chai');
const uniquePaths = require('./uniquepaths');

describe('uniquePaths', () => {
  it('returns the correct number of unique paths through an m x n grid.', () => {
    expect(uniquePaths(3,2)).to.equal(3)
    expect(uniquePaths(7,3)).to.equal(28)
  });
});

