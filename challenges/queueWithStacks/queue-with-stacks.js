'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null ;
  }
}

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
      return lastNode.value ;
    }
  }
  isEmpty(){
    if(this.top === null){
      return true ;
    }else{
      return false ;
    }
  }
}
  

// let stack1 = new Stack() ;
// let stack2 = new Stack() ;

class PseudoQueue {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    this.stack1.push(value);
    return this.stack1 ;
  }

  dequeue(){
    if(this.stack2.isEmpty()){
      while(!this.stack1.isEmpty()){
        this.stack2.push(this.stack1.pop());
      }
      console.log('this.stack2 empty');
      return this.stack2.pop();
    }

    console.log('this.stack2 not empty');
    console.log(this.stack2);

    return this.stack2.pop();
  }

}

module.exports = PseudoQueue ;