'use strict';


// to create new nodes 
class Node {

  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


// print all values in the tree with deferent methods
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }


  // Depth-first approach
  preOrder() {
    let treeValues = [];

    let _walk = (node) => {
      treeValues.push(node.value);
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);

    return treeValues;
  }


  postOrder() {
    let result = [];

    let _walk = (node) => {
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
      result.push(node.value);
    };
    _walk(this.root);

    return result;
  }


  inOrder() {

    let result = [];
    let _walk = (node) => {
      if (node.left) { _walk(node.left); }
      result.push(node.value);
      if (node.right) { _walk(node.right); }
    };
    _walk(this.root);

    return result;
  }


  // Breadth-first approach

  breadth(tree){
    // console.log(tree);
    let temporary = [] ;
    let result = [] ;
    if(tree.root === null){ return null ;}

    // kickoff the while loop 
    temporary.push(tree.root);

    while(temporary.length !== 0){

      for(let i = 0 ; i < temporary.length ; i++){
        
        let current = temporary.shift();
        result.push(current.value);
        if(current.left){temporary.push(current.left);}
        if(current.right){temporary.push(current.right);}   
      }
    }

    // console.log(result);

    return result ;

  }



  findMaxVal(tree){
    console.log('max vaal tree',tree);

    if(tree.root === null){ return null ;}
    let maxVAl = '';

    let _walk= (node) => {
      if(node.value > maxVAl){maxVAl = node.value;}
      if(node.left)_walk(node.left);
      if(node.right)_walk(node.right);
    };

    _walk(tree.root);
    return maxVAl ;
  }


}



// add nodes to the right position depend on node value
class BinarySearchTree {

  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      //console.log('aha!');
      return this.root;
    }

    let _walk = (node) => {
      if (node.value > value) {
        // console.log('smaller');
        if (node.left) {
          _walk(node.left);
        } else {
          return node.left = newNode;
        }

      }else if (node.value < value){
        // console.log('bigger');

        if (node.right) {
          _walk(node.right);
        } else {
        //   console.log('bigger else');
          return node.right = newNode;
        }
      }

    };

    _walk(this.root);
    return this.root ;
  }


  contain(value){
    let result = [];
    // let counter = 0 ;

    let _walk = (node) =>{
    //   counter ++;
      if(node.value === value){return result.push(node.value);}

      if(node.value > value){
        if(node.left){
          _walk(node.left);
        }}

      
      if(node.value < value){
        if(node.right){
          _walk(node.right);
        }}

    };

    _walk(this.root) ;
    // console.log(result);
    // console.log(counter);

    if(result[0]){
      return true;
    }else{
      return false ;
    }

  }

  
}



module.exports = { BinaryTree, Node, BinarySearchTree };