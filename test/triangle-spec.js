const chai = require('chai');
const { expect } = require('chai');

const Triangle = require('../problems/triangle');

describe('Triangle', function(){

  let triangle1;

  beforeEach(() => {
    triangle1 = new Triangle(10,11,12);
  });

  it ('Should create a triangle with properties side1, side2, and side3.', function(){
    expect(triangle1.side1).to.eql(10);
    expect(triangle1.side2).to.eql(11);
    expect(triangle1.side3).to.eql(12);
  });

  describe('getPerimeter()', function(){

    it ('Should sum all three sides of the triangle', function(){
      expect(triangle1.getPerimeter()).to.eql(33);
    });
  });

  describe('hasValidSideLengths', function() {

    it ('Should return true if a triangle is valid (the sum of any two sides must be greater than the remaining side.)', function(){
      expect(triangle1.hasValidSideLength()).to.eql(true);
    });

    it ('Should return false if not valid', function(){
      let invalidT = new Triangle(100, 2, 3);
      expect(invalidT.hasValidSideLength()).to.eql(false);
    });
  });

  describe('validate()', function() {

    it ('Should add an isValid property to triangle instance with value true: if it is a valid triangle', function(){
      triangle1.validate();
      expect(triangle1.isValid).to.eql(true);
    });
    it ('Should add an isValid property to triangle instance with value false: if it is not valid', function(){
      let invalidT = new Triangle(100, 2, 3);
      invalidT.validate();
      expect(invalidT.isValid).to.eql(false);
    });
  });

  describe('static getValidTriangles()', function() {

    it ('Should take in any number of triangle instances and return an array of the valid ones', function(){
      let triangle2 = new Triangle(15, 13, 11);
      let invalidT1 = new Triangle(50, 1, 100);
      let invalidT2 = new Triangle(100, 2, 3);
      let triangles = [triangle1, invalidT1, invalidT2, triangle2];
      expect(Triangle.getValidTriangles())
    });
  });
});
