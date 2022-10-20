function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n > 1000000 || n < 1) {
    throw new TypeError('num must be from 1-1000000');
  }
  return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};
