'user strict';


const { Node } = require('../tree.js');
const { BinaryTree } = require('../tree.js');
const { BinarySearchTree } = require('../tree.js');

describe('Binary Tree', () => {

  let tree = null;

  beforeEach(() => {

    let a = new Node('a');
    let b = new Node('b');
    let c = new Node('c');
    let d = new Node('d');
    let e = new Node('e');
    let f = new Node('f');
    let g = new Node('g');

    a.left = b;
    a.right = e;
    b.left = c;
    b.right = d;
    e.left = f;
    e.right = g;

    tree = new BinaryTree(a);
  });


  it('Can successfully return a collection from a pre-order traversal' , () => {
    expect(tree.preOrder()).toEqual(['a','b','c','d','e','f','g']);
  });

  it('Can successfully return a collection from a post-order traversal' , () => {
    expect(tree.postOrder()).toEqual(['c','d','b','f','g','e','a']);

  });

  it('Can successfully return a collection from an in-order traversal' , () => {
    expect(tree.inOrder()).toEqual(['c','b','d','a','f','e','g']);

  });

  it('Can successfully return a collection from an Depth first approach traversal', () => {
    expect(tree.breadth(tree)).toEqual(['a', 'b', 'e','c', 'd', 'f','g']);  
  });

  // it('Can successfully deal with single node', () => {
  //   let node = new Node('a');
  //   let rootTree = new BinaryTree(node);
  //   expect(tree.breadth(rootTree)).toEqual(['a']);  
  // });

  // it('Can successfully deal with it if it empty root', () => {
  //   let rootTree = new BinaryTree(null);
  //   expect(tree.breadth(rootTree)).toEqual(null);  
  // });




});

describe('BinarySearchTree' , () => {

  let test = null ;
  beforeEach(()=> {
    test = new BinarySearchTree();
  });


  it('Can successfully instantiate an empty tree' , ()=> {

    let testTree = test.add(10) ;
    expect(testTree.value).toEqual(10);
  });

  it('Can successfully instantiate a tree with a single root node' , ()=> {
    test.add(10) ;
    let testTree = test.add(2) ;

    expect(testTree.left.value).toEqual(2);
  });


  it('Can successfully add a left child and right child to a single root node' , ()=> {
    test.add(10) ;
    test.add(2) ;
    let testTree = test.add(12) ;

    expect(testTree.left.value).toEqual(2);
    expect(testTree.right.value).toEqual(12);
  });


  it('Can successfully check if tree contain certain value ' , ()=> {

    test.add(10) ;
    test.add(2) ;
    test.add(12) ;
    test.add(15) ;
    test.add(11) ;

    expect(test.contain(15)).toBeTruthy();
    expect(test.contain(5)).toBeFalsy();
  });




});
