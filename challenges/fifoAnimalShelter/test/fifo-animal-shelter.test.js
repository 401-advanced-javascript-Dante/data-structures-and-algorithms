'use strict';

const Animal = require('../fifo-animal-shelter.js');

describe('Animal Shelter', () => {

  it('Enqueue Works', () => {
    let newAnimal = new Animal() ;
    newAnimal.enqueue('dog');
    expect(newAnimal.enqueue('cat')).toEqual('cat');

  });

  it('Enqueue more than once Works', () => {
    let newAnimal = new Animal() ;
    newAnimal.enqueue('cat');
    newAnimal.enqueue('dog');
  });

  it('dequeue Works', () => {
    let newAnimal = new Animal() ;
    newAnimal.enqueue('cat');
    newAnimal.enqueue('dog');
    expect(newAnimal.dequeue()).toEqual('cat');
  });

  it('dequeue more than once Works', () => {
    let newAnimal = new Animal() ;
    newAnimal.enqueue('cat');
    newAnimal.enqueue('dog');
    newAnimal.dequeue();
    expect(newAnimal.dequeue()).toEqual('dog');
  });

});