const chai = require('chai');
const { expect } = require('chai');

const {Triangle, Scalene, Isosceles} = require('../problems/triangle');

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
      expect(Triangle.getValidTriangles(triangles)).to.eql([triangle1, triangle2]);
    });
  });
});

describe('Scalene', function(){

  let scalene1;
  let invalidS;

  beforeEach(() => {
    scalene1 = new Scalene(10,11,12);
    invalidS = new Scalene(100,1,1);
  });

  it ('Should inherit side properties from the triangle class and create an isValid property', function(){
    expect(scalene1.side1).to.eql(10);
    expect(scalene1.side2).to.eql(11);
    expect(scalene1.side3).to.eql(12);
    expect(scalene1.isValid).to.exist;
  });

  it ('Should have an isValid property that is a boolean from running validate() on the instance', function(){
    expect(scalene1.isValid).to.eql(true);
    expect(invalidS.isValid).to.eql(false);
  });

  describe('isScalene()', function(){

    it ('Should return true if the triangle is scalene, otherwise return false (all sides different length)', function(){
      expect(scalene1.isScalene()).to.eql(true);
      expect(invalidS.isScalene()).to.eql(false);
    });
  });

  describe('validate()', function(){

    it ('Should add an isValidScalene Property to instance equal to running isScalene() on triangle', function(){
      scalene1.validate();
      invalidS.validate();
      expect(scalene1.isValidScalene).to.eql(true);
      expect(invalidS.isValidScalene).to.eql(false);
    });
  });
});

describe('Isosceles', function(){

  let isosceles1;
  let invalidI;

  beforeEach(() => {
    isosceles1 = new Isosceles(10,10,8);
    invalidI = new Isosceles(1,100,1);
  });

  it ('Should inherit side properties from the triangle class and create an isValid property', function(){
    expect(isosceles1.side1).to.eql(10);
    expect(isosceles1.side2).to.eql(10);
    expect(isosceles1.side3).to.eql(8);
    expect(isosceles1.isValid).to.exist;
  });

  it ('Should have an isValid property that is a boolean from running validate() on the instance', function(){
    expect(isosceles1.isValid).to.eql(true);
    expect(invalidI.isValid).to.eql(false);
  });

  describe('isIsosceles()', function(){

    it ('Should return true if the triangle is Isosceles, otherwise return false (2 sides same length)', function(){
      let invalidI2 = new Isosceles(1, 1, 1);
      expect(isosceles1.isIsosceles()).to.eql(true);
      expect(invalidI.isIsosceles()).to.eql(false);
      expect(invalidI2.isIsosceles()).to.eql(false);
    });
  });

  describe('validate()', function(){

    it ('Should add an isValidIsosceles Property to instance equal to running isIsosceles() on triangle', function(){
      isosceles1.validate();
      invalidI.validate();
      expect(isosceles1.isValidIsosceles).to.eql(true);
      expect(invalidI.isValidIsosceles).to.eql(false);
    });
  });

});
