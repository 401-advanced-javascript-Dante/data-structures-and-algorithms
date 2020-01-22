'use strict';



const binary = require('../array-binary-search');

describe('list' , () => {

    it('inputs should be an array and a number', () => {
        let testArr = [1 , 2 , 3] ;
        expect(binary(testArr , 4)).toEqual(-1) ;

    })
    
    it('it should return -1 when the value not inside the array', () => {
        let testArr = [1 , 2 , 3] ;
            // shift(testArr , 4) ;
        expect(binary(testArr , 4)).toEqual(-1) ;
    })

    it('inputs can be string also ', () => {
        let testArr = ['a' , 'b' , 'c'] ;
        expect(binary(testArr , 'b') ).toEqual(1) ;
    })



})
