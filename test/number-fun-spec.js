const { expect } = require('chai');

const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returns three', function() {

  it('should return three', function() {
    expect(returnsThree()).to.eql(3);
  });

});

describe('should take a num and return the reciprocal', function() {

  it('should return the reciprocal of the number', function() {
    expect(reciprocal(5/1)).to.eql(1/5);
  });

  it('should only accept nums from 1-1,000,000', function() {
    expect(() => reciprocal(1000001)).to.throw(TypeError);
    expect(() => reciprocal(-10)).to.throw(TypeError);
  })
});
