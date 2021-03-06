'use strict';

// const Node = require

function Node(value) {
  this.name = value;
  this.next = null;
}



class LinkedList {
  constructor() {
    this.head = null;
  }



  insert(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this ;
    }
    // { name : test1 , next = null }

    let pointer = this.head;
    while (pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = node;
    return this;
  }


  /**
   * 
   * @param value 
   * @returns {boolean}
   */

  include(value){

    let pointer = this.head;
    while (pointer.next) {
      if(pointer.next.name === value){
        return true ;
      }
      pointer = pointer.next;
    }
    return false ;
  }


  toString(){
    let result = [] ;
    let pointer = this.head;
    while (pointer.next) {
      result.push(pointer.name);
      pointer = pointer.next;
    }
    // console.log(node);
    result.push(pointer.name);
    result.push('Null');

    let answer = result.join(' -> ');
    return answer; 
  }



  append(value){
    let node = new Node(value) ;

    let pointer = this.head ;
    while(pointer.next){
      pointer = pointer.next ;
    }

    pointer.next = node ;
    return this ;
  }


  insertBefore(value, newVal){

    let node = new Node(newVal);

    let pointer = this.head ;
    if(pointer.name === value){
      this.head= node ;
      this.head.next = pointer;
      return this;
    }

    while(pointer.next){
      var previousP = pointer.next ;
      if(pointer.next.name === value){
        pointer.next = node ;
      }
      pointer = pointer.next ;
    }
    pointer.next = previousP;
    return this ;
  }



  insertAfter(value, newVal){
    let node = new Node(newVal);
    let pointer = this.head ;
    let afterP ;
    let previousP ;

  
    while(pointer.next){

      if(pointer.name === value){
        afterP = pointer.next;
        pointer.next= node ;
      }
      previousP = pointer;
      pointer = pointer.next;
    }
    if(pointer.next){
      pointer.next = afterP ;
    }else{
      previousP.next.next= node;
    }
  }


  kthFromEnd(k){

    if(k <= 0 ){
      return 'negative numbers rejected';
    }

    let pointer = this.head ;
    let length = 0 ;
    while(pointer.next){
      pointer = pointer.next ;
      length ++ ;
    }

    console.log('length: ' , length);
    
    let target = length - k ;

    // console.log('target: ', target);
    // console.log('the list: ', this)
    // console.log('the list: ', this.head);

    let counter = 0 ;

    let newPointer = this.head;
    while(newPointer.next){
      newPointer = newPointer.next ;
      counter++ ;
      if(counter === target){
        return newPointer.name;
      }
    }
    return 'Exception';
  }


  mergeLists(list1 , list2 ){
    
    let list1Pointer = list1.head ;
    let list2Pointer = list2.head ;

    while(list1Pointer && list2Pointer){
      this.insert(list1Pointer.name);
      this.insert(list2Pointer.name);
      list1Pointer = list1Pointer.next ;
      list2Pointer = list2Pointer.next ;
    }
    return this ;
  }


}

module.exports = LinkedList;