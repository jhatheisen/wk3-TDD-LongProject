const chai = require("chai")
const expect = chai.expect

const Person = require("../problems/person")


describe("Person", function() {

    let Joe;
    let Wendy;

    beforeEach(() => {
      Joe = new Person("Joe",50);
      Wendy = new Person("Wendy",40);
    });

    it ("Should construct name and age", function (){
        expect(Joe.name).to.exist;
        expect(Joe.age).to.exist;
    });

    describe("sayHello()",function() {
        it ("Should return the persons name and greeting", function (){
            expect(Joe.sayHello()).to.eql("Hello there Joe");
        });
    });

    describe("visit(otherPerson)", function() {
        it ("Should return a string name visited name 2", function(){
            expect(Joe.visit(Wendy)).to.eql("Joe visited Wendy");
        });
    });

    describe("switchVisit(otherPerson)", function(){
        it ("Should return a string name 2 visited name 1", function(){
            expect(Joe.switchVisit(Wendy)).to.eql("Wendy visited Joe");
        });
    });

    describe("update(obj)", function() {
        it ("Should throw a new TypeError with a message if argument is not an object", function(){
          let wrongType = 1;
          expect(() => Joe.update(wrongType)).to.throw(TypeError,"arguement is not an object");
        });

        it ('Should update the objects values with the passed in objects values', function(){
          Joe.update(Wendy);
          expect(Joe.name).to.eql(Wendy.name);
          expect(Joe.age).to.eql(Wendy.age);
        });

        it ('Should return a new TypeError "No Name or Age Properties" if there is no name and age property of the object', function() {
          let errorPerson = new Person();
          expect(() => Joe.update(errorPerson)).to.throw(TypeError, "No Name or Age Properties");
        });
    });

    describe('tryUpdate(obj)', function() {

      it ('Should call the update(obj) method with the incoming arg and return true', function() {
        expect(Joe.tryUpdate(Wendy)).to.eql(true);
        expect(Joe.name).to.eql(Wendy.name);
        expect(Joe.age).to.eql(Wendy.age);
      });

      it ('Should return false if improperly invoked', function() {
        let badObj = new Person;
        let badObj2 = 1;
        expect(badObj.tryUpdate(badObj2)).to.eql(false);
      });
    });

    describe('greetAll(objArr)', function() {

      it ('Should call sayHello() on each object element of the passed in array ', function() {
        let people = [Joe, Wendy];
        expect(Person.greetAll(people)).to.eql([`Hello there Joe`, `Hello there Wendy`]);
      });
    });
})
