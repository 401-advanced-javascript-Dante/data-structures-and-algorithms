'use strict';

const fizzBuzz = require('../fizz-buzz-tree.js');
console.log('hola',fizzBuzz);

function Node(value){
  this.value = value ;
  this.left = null ;
  this.right = null ;
}

describe('Fizz-Buzz Tree', ()=> {
  let tree = null ;
  beforeEach(()=> {
    let one = new Node(1) ;
    let two = new Node(2) ;
    let three = new Node(3) ;
    one.left = two ;
    one.right = three ;
    tree = one ;

  });

  it('When value %3 change it to Fizz', () => {

    let test = fizzBuzz(tree);
    expect(test.right.value).toEqual('Fizz');
  });

  it('When value not %3 & %5 change it string', () => {
    let test = fizzBuzz(tree);
    expect(typeof test.value).toEqual('string');
  });


  it('When value %3 & %5 change it FizzBuzz', () => {
    
    let one = new Node(1) ;
    let two = new Node(5) ;
    let three = new Node(30) ;
    one.left = two ;
    one.right = three ;
    let testTree = one ;
    let test = fizzBuzz(testTree);

    expect(test.right.value).toEqual('FizzBuzz');
  });

});