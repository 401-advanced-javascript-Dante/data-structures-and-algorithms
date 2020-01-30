'use strict';


const LL = require('../ll-merge.js');

describe('Linked-List' , ()=> {

  let list1 = {head : {
    name : 1 , next : {
      name : 3 , next : {
        name : 2 , next : null, 
      },
    },
  }};

  let list2 = {head : {
    name : 5 , next : {
      name : 9 , next : {
        name : 4 , next : null, 
      },
    },
  }};
  

  it('mergeLists() return an object ' , () => {
    let init = new LL() ;


    let mergedList = init.mergeLists(list1 , list2);
    expect(typeof mergedList).toEqual('object');
  });

  it('merged link should have the right start value ' , () => {
    let init = new LL() ;


    let mergedList = init.mergeLists(list1 , list2);
    expect(mergedList.head.name).toEqual(1);
  });

  it('return the right sequence of merged lists' , () => {
    let init = new LL() ;
    let result = init.mergeLists(list1 , list2);
    let values = [] ;
    let pointer = result.head ;
    while(pointer.next){
      values.push(pointer.name);
      pointer = pointer.next ;
    }
    values.push(pointer.name);

    expect(values).toEqual([1, 5, 3, 9, 2, 4]);
  });



});