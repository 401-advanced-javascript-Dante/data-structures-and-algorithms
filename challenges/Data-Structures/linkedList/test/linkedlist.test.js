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
    console.log(list.toString());
    expect(list.toString()).toEqual('test1 -> test2 -> test3 -> Null') ;
  });



  
});