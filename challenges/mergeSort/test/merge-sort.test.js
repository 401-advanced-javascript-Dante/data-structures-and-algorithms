'use strict';

const merge = require('../merge-sort.js');


describe('Merge Sort' , ()=> {


  it('Sort an array ', ()=> {
    expect(merge([1,3,5,2,7])).toEqual([1,2,3,5,7]);
  });

  it('Sort an array with length of 3 / odd ', ()=> {
    expect(merge([3,5,1])).toEqual([1,3,5]);
  });

  it('Sort an array with length of 6 / even', ()=> {
    expect(merge([4,8,15,16,23,42])).toEqual([4,8,15,16,23,42]);
  });

});
