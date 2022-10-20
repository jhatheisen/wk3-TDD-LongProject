class Person {
  constructor(name,age){
    this.name = name
    this.age = age
  }

  sayHello() {
    return `Hello there ${this.name}`
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this)
  }

  update(obj) {
    if (typeof obj !== 'object') {
      throw new TypeError('arguement is not an object');
    } else if (obj.name === undefined || obj.age === undefined) {
      throw new TypeError("No Name or Age Properties");
    } else if (typeof obj === 'object') {
      this.name = obj.name;
      this.age = obj.age;
    }
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      if (this.name === obj.name && this.age === obj.age) {
        return true;
      }
      return false;

    }
    catch (error){
      return false;
    }
  }

  static greetAll(objArr) {
    let storedGreetings = [];
    for (let obj of objArr) {
      storedGreetings.push(obj.sayHello());
    }
    return storedGreetings;
  }
}
// let Joe = new Person("Joe",50);
// let Wendy = new Person("Wendy",40);
// let people = [Joe, Wendy];
// console.log(Person.greetAll(people));

module.exports = Person;
