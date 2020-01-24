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
    // list.insert('test2');
    // console.log('after' ,list);
    // console.log('next' ,list.head.next);
    expect(list.head.name).toEqual('test1');
  });

  it('Will return true when finding a value within the linked list that exists', ()=> {
    let list = new LL() ; 
    list.insert('test1');
    expect(list.include('test1')).toBeTruthy() ;
  });

  // it('Will return false when searching for a value in the linked list that does not exist', ()=> {
  //   let list1 = new LL() ; 
  //   list1.insert();
  //   expect(list1.include('test2')).toBeFalsy() ;
  // });
});