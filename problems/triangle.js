class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }

  hasValidSideLength() {
    let a = this.side1;
    let b = this.side2;
    let c = this.side3;
    return !(a + b <= c || a + c <= b || b + c <= a);
  }

  validate() {
    if (this.hasValidSideLength()) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }

  static getValidTriangles(tArr) {
    let valids = [];
    for (let triangle of tArr) {
      if (triangle.hasValidSideLength()) {
        valids.push(triangle);
      }
    }
    return valids;
  }
}

class Scalene extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    super.validate();
  }

  isScalene() {
    let a = this.side1;
    let b = this.side2;
    let c = this.side3;
    return (!(a === b || b === c || a === c));
  }

  validate() {
    this.isValidScalene = this.isScalene();
  }
}

class Isosceles extends Triangle {
  constructor(side1, side2, side3) {
    super(side1, side2, side3);
    super.validate();
  }

  isIsosceles() {
    let a = this.side1;
    let b = this.side2;
    let c = this.side3;
    return ((a === b || b === c || a === c) && !(a === b && a === c) && this.isValid);
  }

  validate() {
    this.isValidIsosceles = this.isIsosceles();
  }
}

module.exports = {Triangle, Scalene, Isosceles};
