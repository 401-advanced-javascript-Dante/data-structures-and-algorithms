'use strict' ;

const Pseudo = require('../queue-with-stacks.js');


describe('Queue With Stacks' , () => {

  it('Can enqueue' , () => {
    let queue = new Pseudo();
    let test = queue.enqueue(1);
    expect(test.top.value).toEqual(1);
  });

  it('Can enqueue more than once' , () => {
    let queue = new Pseudo();
    queue.enqueue(10);
    queue.enqueue(15);
    let test = queue.enqueue(20);
    expect(test.top.value).toEqual(20);
  });

  it('Can Dequeue' , () => {
    let queue = new Pseudo();
    queue.enqueue(10);
    queue.enqueue(15);
    let pop = queue.dequeue();
    expect(pop).toEqual(10);
  });

  it('Can dequeue more than once' , () => {
    let queue = new Pseudo();
    queue.enqueue(10);
    queue.enqueue(15);
    queue.enqueue(20);
    queue.dequeue();
    let pop = queue.dequeue();
    console.log(pop);
    expect(pop).toEqual(15);

  });




});