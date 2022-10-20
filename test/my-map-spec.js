const spies  = require('chai-spies');
const {expect} = require('chai');
const chai = require('chai');
chai.use(spies);


const myMap = require('../problems/my-map');

describe('my map', function() {


  let arr;
  let callback;

  beforeEach(() => {
    arr = [1, 2, 3];
    callback = (el) => el * 2;
  });

  it('should return an new array with the values of calling the callback on each element of the array', function () {
    expect(myMap(arr,callback)).to.eql([2,4,6]);
  });

  it('should not mutate original arr', function() {
    let unchanged = arr.slice();
    myMap(arr,callback);
    expect(arr).to.eql(unchanged);
  });

  it('should not call built in array.map', function() {
    let spy = chai.spy.on(arr, 'map');
    myMap(arr, callback);
    expect(spy).to.not.have.been.called();
  });

  it('should call the callback once for each element in the array', function() {
    let spy = chai.spy(callback);
    myMap(arr, spy);
    expect(spy).to.have.been.called.exactly(arr.length);
  });

});
