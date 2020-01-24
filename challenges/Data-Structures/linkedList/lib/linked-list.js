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
    }
    // { name : test1 , next = null }

    let pointer = this.head;
    console.log(pointer);
    console.log(pointer.next);
    while (pointer.next) {
      pointer = pointer.next;
    }
    console.log(node);
    pointer.next = node;
    console.log(pointer.next);
    console.log(pointer.next.next);
    console.log(pointer.next.next.next);
    console.log(pointer.next.next.next.next);

    return this;
  }


   


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






}

module.exports = LinkedList;