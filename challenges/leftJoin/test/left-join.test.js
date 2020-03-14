'use strict';

let leftJoin = require('../left-join.js');

describe('Left-Join', ()=> {

  let a ;
  let b ;
  beforeEach(()=> {
    a = {
      'fond': 'enamored',
      'wrath': 'anger',
      'diligent': 'employed',
      'outfit' : 'garb',
      'guide': 'usher',
    };
          
    b = {
      'fond': 'averse',
      'wrath': 'delight',
      'diligent': 'idle',
      'guide': 'follow',
      'flow' : 'jam',
    };      
  });



  it('return array of arrays contain all keys of first map',()=>{
      
    let test = leftJoin(a, b);
    Object.keys(a).map((val, idx) => {
      expect(test[idx].includes(a[val])).toBeTruthy();
    });
  });


  it('return array of arrays contain null if key not exist in second map',()=>{
      
    let test = leftJoin(a, b);
    expect(test[3].includes(null)).toBeTruthy();
  });


  it('add value to repeated key',()=>{
      
    let test = leftJoin(a, b);
    expect(test[0].includes('averse')).toBeTruthy();
  });




});