'use strict';

class Node {
  constructor(value){
    this.value = value ;
    this.next = null ;
  }
}

// last in first out => first in last out
class Stack {
  constructor(){
    this.top = null ;
  }

  push(value){
    let newNode =  new Node(value) ;
    if(this.top === null){
      this.top = newNode;
    }else{
      newNode.next= this.top ;
      this.top = newNode;
    }
  }


  pop(){
    if(this.top === null){
      return null ;
    }else{
      let lastNode = this.top ;
      this.top = this.top.next ;
      return lastNode ;
    }
  }
  peek(){
    if(this.top === null){
      return null ;
    }else{
      return this.top.value;
    }
  }
  isEmpty(){
    if(this.head === null){
      return true ;
    }else{
      return false ;
    }
  }
}

// first in first out => last in last out 
class Queue{
  constructor(){
    this.front = null ;
    this.back = null ;
  }
  
  enqueue(val){
    let newNode = new Node(val);
    if(this.front === null){
      this.front = newNode ;
      this.back = newNode ;
    }else{
      this.back.next = newNode;
      this.back = newNode ;
    }
  }

  dequeue(){
    if(this.front === null){
      return null;
    }else{
      let removed = this.front.value ;
      this.front = this.front.next ;
      if(this.front === null){
        this.back = null ;
      }
      return removed ;
    }
  }

  peek(){
    if(this.front === null){
      return null ;
    }else{
      return this.front.value;
    }
  }

  isEmpty(){
    if(this.front === null){
      return true ;
    }else{
      return false ;
    }
  }

}


module.exports = {Stack , Queue} ;