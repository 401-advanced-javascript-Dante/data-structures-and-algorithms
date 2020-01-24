'use strict';

// const Node = require

function Node (value){
  this.name = value ;
  this.next = null ;
}



class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    // console.log(this.head);
    
    if (!this.head) {
      this.head = node;
    }
    
    let pointer = this.head ;
    // console.log(pointer);

    while(pointer.next){
      pointer = pointer.next ;
      // console.log('hii');
    }
    // console.log(pointer);

    pointer.next = node ;
    return this ;
  }
}

module.exports= LinkedList ;