'use strict';

const myTools = require('../Interviews') ;


describe('testing i/o' , () => {


  it('summing function take array of arrays as input and normal array for answers' , () => {
    let example = [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ];
    expect(myTools.summer(example)).toEqual([6, 15, 18]);
  });

  it('check if summing function takes negative numbers also', () => {
    let example = [ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ];
    expect(myTools.summer(example)).toEqual([6, 5, 20]);

  });

});

describe('testing fibo' , () => {
  it('input and output of fibo function should be integer' , () => {
    let test = 5 ;
    expect(myTools.fibo(test)).toEqual(5);
  });
  it('Output of fibo function should be true' , () => {
    let test = 9 ;
    expect(myTools.fibo(test)).toEqual(34);
  });
  it('if input equal 1 or zero it should give the right answer', () => {
    let test = 0 ; 
    expect(myTools.fibo(test)).toEqual(0);
    test = 1 ; 
    expect(myTools.fibo(test)).toEqual(1);




  });


});