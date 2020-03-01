'use strict';

const repeated = require('../repeated-word.js');


describe('Repeated()', () => {

  it('Return the repeated word',()=>{
    expect(repeated('Once upon a time, there was a brave princess who')).toEqual('a');
  });

  it('Take the first repeated word',()=>{
    expect(repeated('It was the best of times, it was the worst of times, it was the ....')).toEqual('it');
  });

  it('Return the repeated word even if it upper or lower case',()=>{
    expect(repeated('It was a queer, sultry Summer , the summer they electrocuted ')).toEqual('summer');
  });



});