const { expect } = require('chai');

const reverseString = require('../problems/reverse-string');

describe('Reverse String', function () {

  it('should return the reversed string', function() {
    expect(reverseString('fun')).to.eql('nuf');
  });

  it('should throw a type error', function() {
    expect(() => reverseString(null)).to.throw(TypeError);
  });

});
