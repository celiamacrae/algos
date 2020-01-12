//mocha moveelementtoend.spec.js

const { expect } = require('chai');
const moveElementToEnd = require('./moveelementtoend');

describe('moveElementToEnd', () => {
  it('moves all instances of the target integer in the array to the end of the array.', () => {
    expect(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)).to.deep.equal([ 1, 3, 4, 2, 2, 2, 2, 2 ]);
  });
});
