'use strict' ;


const LL = require('../lib/linked-list.js');


describe('Linked-List Test' , () => {

  it('Can successfully instantiate an empty linked list', () => {
    let list = new LL() ;
    expect(list.head).toBeNull();
  });

  it('Can properly insert into the linked list' , () => {
    let list = new LL() ;
    list.insert('test');
    expect(list.head.name).toEqual('test');
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LL() ;
    list.insert('test1');
    expect(list.head.name).toEqual('test1');
  });

  it('Can properly insert multiple nodes into the linked list' , () => {
    let list = new LL() ; 
    // console.log('befor', list);
    list.insert('test1');
    list.insert('test2');
    list.insert('test3');
    // console.log('after' ,list);
    // console.log('next' ,list.head.next);
    // console.log('next' ,list.head);

    expect(list.head.next.next.name).toEqual('test3');
  });

  it('Will return true when finding a value within the linked list that exists', ()=> {
    let list = new LL() ; 
    list.insert('test1');
    list.insert('test2');
    list.insert('test3');

    expect(list.include('test2')).toBeTruthy() ;
  });

  it('Will return false when searching for a value in the linked list that does not exist', ()=> {
    let list = new LL() ; 
    list.insert('test1');
    list.insert('test2');
    list.insert('test3');
    expect(list.include('test0')).toBeFalsy() ;
  });

  it('Can properly return a collection of all the values that exist in the linked list', ()=> {
    let list = new LL() ; 
    list.insert('test1');
    list.insert('test2');
    list.insert('test3');
    // console.log(list.toString());
    expect(list.toString()).toEqual('test1 -> test2 -> test3 -> Null') ;
  });

  it('Can successfully add a node to the end of the linked list', ()=> {
    let list = new LL() ; 
    list.insert('test1');
    list.insert('test2');
    list.insert('test3');
    list.append('appended');

    expect(list.head.next.next.next.name).toEqual('appended');

  });


  it('Can successfully add multiple nodes to the end of a linked list', ()=> {
    let list = new LL() ; 
    list.insert('test1');
    list.insert('test2');
    list.append('appended1');
    list.append('appended2');
    expect(list.head.next.next.next.name).toEqual('appended2');
  });


  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    let list = new LL() ;
    list.insert(1);
    list.insert(3);
    list.insert(2);
    list.insertBefore(3 , 5);
    expect(list.head.next.name).toEqual(5);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LL() ;
    list.insert(1);
    list.insert(3);
    list.insert(2);
    list.insertBefore(1 , 5);
    expect(list.head.name).toEqual(5);
  });


  it('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LL() ;
    list.insert(1);
    list.insert(3);
    list.insert(2);
    list.insertAfter(3 , 5);
    expect(list.head.next.next.name).toEqual(5);
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LL() ;
    list.insert(1);
    list.insert(3);
    list.insert(2);
    list.insertAfter(2 , 5);
    expect(list.head.next.next.next.name).toEqual(5);
  });



  
});