'use strict';

const insertion = require('../insertion.js');


describe('Insertion' , ()=> {


  it('Sort an array ', ()=> {
    expect(insertion([1,3,5,2,7])).toEqual([1,2,3,5,7]);
  });

  it('Sort an array with length of 2 ', ()=> {
    expect(insertion([1,3])).toEqual([1,3]);
  });

  it('Sort an array with length of 1 ', ()=> {
    expect(insertion([1])).toEqual([1]);
  });

});
