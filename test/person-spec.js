const chai = require("chai")
const expect = chai.expect

const Person = require("../problems/person")


describe("Person", function() {
    it ("Should construct name and age", function (){
        let Joe = new Person("Joe",50)
        expect(Joe.name).to.exist
        expect(Joe.age).to.exist
    })

    describe("sayHello()",function() {
        it ("Should return the persons name and greeting", function (){
            let Joe = new Person("Joe",50)
            expect(Joe.sayHello()).to.eql("Hello there Joe")
        })

    })

    describe("visit(otherPerson)", function() {
        it ("Should return a string name visited name 2", function(){
            let Joe = new Person("Joe",50)
            let Wendy = new Person("Wendy",40)
            expect(Joe.visit(Wendy)).to.eql("Joe visited Wendy")
        })
    })
    describe("switchVisit(otherPerson)", function(){
        it ("Should return a string name 2 visited name 1", function(){
            let Joe = new Person("Joe",50)
            let Wendy = new Person("Wendy",40)
            expect(Joe.switchVisit(Wendy)).to.eql("Wendy visited Joe")
        })


    })
    describe("update(obj)", function() {
        it ("Should throw a new TypeError with a message if argument is not an object", function(){
            let wrongType = 1
            let Joe = new Person("Joe",50)
            expect(Joe.update(wrongType)).to.throw(TypeError,"argument is not an object")
        })

    })

})
