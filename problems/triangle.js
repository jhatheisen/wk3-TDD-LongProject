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
    if (a + b <= c || a + c <= b || b + c <= a) {
      return false;
    }
    return true;
  }

  validate() {
    if (this.hasValidSideLength()) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
}

module.exports = Triangle;
