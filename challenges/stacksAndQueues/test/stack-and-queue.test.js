'use strict';

const sa = require('../stacks-and-queues.js');





describe('Stack' , () => {
  it('Can successfully push into a stack' , () => {
    let stack = new sa.Stack();
    stack.push(1) ;
    expect(stack.top.value).toEqual(1);
  });
  it('Can successfully push multiple values onto a stack' , () => {
    let stack = new sa.Stack();
    stack.push(1) ;
    stack.push(2) ;
    expect(stack.top.value).toEqual(2);
  });

  it('Can successfully pop off the stack' , () => {
    let stack = new sa.Stack();
    stack.push(1) ;
    stack.push(2) ;
    stack.pop() ;
    expect(stack.top.value).toEqual(1);
  });

  it('Can successfully empty a stack after multiple pops' , () => {
    let stack = new sa.Stack();
    stack.push(1) ;
    stack.push(2) ;
    stack.pop() ;
    stack.pop() ;
    expect(stack.top).toEqual(null);
  });

  it('Can successfully peek the next item on the stack' , () => {
    let stack = new sa.Stack();
    stack.push(1) ;
    stack.push(2) ;
    expect(stack.peek()).toEqual(2);
  });

  it('Can successfully instantiate an empty stack' , () => {
    let stack = new sa.Stack();
    expect(stack.isEmpty()).toBeFalsy();
  });
});



describe('Queue' , () => {

  it('Can successfully enqueue into a queue' , () => {
    let queue = new sa.Queue();
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);


  });

  it('Can successfully enqueue multiple values into a queue' , () => {
    let queue = new sa.Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.back.value).toEqual(2);
    expect(queue.front.value).toEqual(1);
  });


  it('Can successfully dequeue out of a queue the expected value' , () => {

    let queue = new sa.Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.back.value).toEqual(2);
  });

  it('Can successfully peek into a queue, seeing the expected value' , () => {
    let queue = new sa.Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);
  });

  it('Can successfully empty a queue after multiple dequeue' , () => {
    let queue = new sa.Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toEqual(null);
    expect(queue.back).toEqual(null);

    
  });
  it('Can successfully instantiate an empty queue' , () => {
    let queue = new sa.Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);

  });
            
    
});