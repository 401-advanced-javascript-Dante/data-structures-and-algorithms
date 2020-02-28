'use strict';

const quick = require('../quick-sort.js');


describe('quick' , ()=> {


  it('Sort an array ', ()=> {
    expect(quick([1,3,5,2,7] , 0 ,4)).toEqual([1,2,3,5,7]);
  });

  it('Sort an array with length of 2 ', ()=> {
    expect(quick([1,3],0,1)).toEqual([1,3]);
  });

  it('Sort an array with length of 1 ', ()=> {
    expect(quick([1],0,0)).toEqual([1]);
  });

});
