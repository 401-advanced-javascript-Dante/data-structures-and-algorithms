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