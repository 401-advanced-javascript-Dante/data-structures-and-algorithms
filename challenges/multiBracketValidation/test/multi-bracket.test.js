'user strict';

const sniper = require('../multi-bracket-validation.js');


describe('Multi Bracket Validation', ()=> {

  it('Works With Parentheses' , ()=> { 
    expect(sniper('()(())')).toEqual(true);
    expect(sniper('((())')).toEqual(false);
    expect(sniper('((()))()')).toEqual(true);
  });


  it('Works With Brackets' , ()=> {
    expect(sniper('[[]]')).toEqual(true);
    expect(sniper('[]]')).toEqual(false);
    expect(sniper('[[]][][[]]')).toEqual(true);
  });

  
  it('Works With curly parentheses' , ()=> {
    expect(sniper('{}{{}}')).toEqual(true);
    expect(sniper('{{{}}')).toEqual(false);
    expect(sniper('{{}}{}')).toEqual(true);

  });

  it('Works With multi brackets' , ()=> {
    expect(sniper('{}()[][[()]]')).toEqual(true);
    expect(sniper('[][()(){{}}')).toEqual(false);
    expect(sniper('(){}[]()')).toEqual(true);
  });

  it('Work with Edge Cases !!' , ()=> {
    expect(sniper('{(})')).toEqual(false);
    expect(sniper('{')).toEqual(false);
    expect(sniper('[')).toEqual(false);
    expect(sniper(')')).toEqual(false);
  });


});