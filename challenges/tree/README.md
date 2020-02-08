# Trees
<!-- Short summary or background information -->
A binary tree is made of nodes, where each node contains a "left" reference, a "right" reference, and a data element.
The topmost node in the tree is called the root. 
Every node (excluding a root) in a tree is connected by a directed edge from exactly one other node. 
This node is called a parent.


## Challenge
<!-- Description of the challenge -->
Create a Node class that has properties of value , left and the right node .
Create a BinaryTree class with preOrder(),postOrder() and inOrder() methods .
Create a BinarySearchTree class with add() and contain() methods

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

The Big O time complexity for inserting a new node is O(n).
Searching for a specific node will also be O(n). 
Because of the lack of organizational structure in a Binary Tree, the worst case for most operations will involve traversing the entire tree. 
If we assume that a tree has n nodes, then in the worst case we will have to look at n items, hence the O(n) complexity.



## API
<!-- Description of each method publicly available in each of your trees -->

For BinaryTree class we have 3 methods 
1- preOrder() where we push each node value at time we reach it .
2- postOrder() where we start pushing the node value when it have no left and right value .
3- inOrder() start pushing the node value if it have no left value .   
