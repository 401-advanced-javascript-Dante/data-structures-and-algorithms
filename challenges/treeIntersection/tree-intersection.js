'use strict';

function tree_intersection(tree1 ,tree2){

  let tree1Values = [];
  let result = [];

  let current = tree1.head ;
  let current2 = tree2.head ;

  let _walk = (node) => {
    tree1Values.push(node.val);
    if(node.left)_walk(node.left);
    if(node.right)_walk(node.right);
  };
  _walk(current);

  let _walk2 = (node) => {
    if(tree1Values.includes(node.val))result.push(node.val);
    if(node.left)_walk2(node.left);
    if(node.right)_walk2(node.right);
  };
  _walk2(current2);


  
  return result ;
}




module.exports = tree_intersection ;