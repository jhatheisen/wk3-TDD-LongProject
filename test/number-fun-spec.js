const { expect } = require('chai');

const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returns three', function() {

  it('should return three', function() {
    expect(returnsThree()).to.eql(3);
  });

});

describe('should take a num and return the reciprocal', function() {

  it('should return the reciprocal of the number', function() {
    expect(reciprocal(5)).to.eql(1/5);
  });
});
