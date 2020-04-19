//1) tree
//A data structure that consists of nodes in a parent / child relationship

// Lists - linear
// Trees - nonlinear

//terminologies
/*
    Root     - The top node in a tree.
    Child    - A node directly connected to another node when moving away from the Root.
    Parent   - The converse notion of a child.
    Siblings - A group of nodes with the same parent.
    Leaf     - A node with no children.
    Edge     - The connection between one node and another.
*/

// kinds
/*
    Trees
    Binary Trees
    Binary Search Trees
*/

//applications of trees
/*
    HTML DOM
    Network Routing
    Abstract Syntax Tree
    Artificial Intelligence
    Folders in Operating Systems
    Computer File Systems
*/

//applications of binary trees
/*
    Decision Trees (true / false)
    Database Indicies
    Sorting Algorithms
*/

// 2)binary search tree
/*
    Every parent node has at most two children
    Every node to the left of a parent node is always less than the parent
    Every node to the right of a parent node is always greater than the parent
*/

//2.a) inserting
//pseudocode of insert
/*
    Create a new node
    Starting at the root
        Check if there is a root, if not - the root now becomes that new node!
        If there is a root, check if the value of the new node is greater than or less than the value of the root
        If it is greater 
            Check to see if there is a node to the right
                If there is, move to that node and repeat these steps
                If there is not, add that node as the right property
        If it is less
            Check to see if there is a node to the left
                If there is, move to that node and repeat these steps
                If there is not, add that node as the left property
*/

//2.b) finding
//pseudocode
/*
    Starting at the root
        Check if there is a root, if not - we're done searching!
        If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
        If not, check to see if the value is greater than or less than the value of the root
        If it is greater 
            Check to see if there is a node to the right
                If there is, move to that node and repeat these steps
                If there is not, we're done searching!
        If it is less
            Check to see if there is a node to the left
                If there is, move to that node and repeat these steps
                If there is not, we're done searching!
*/

//bigO of bst
/*
    Insertion - O(log n)
    Searching - O(log n)
    and its NOT guaranteed!
*/

//more funny information about bst
/*
    2x number of nodes: 1 extra step
    4x number of nodes: 2 extra steps
    8x number of nodes: 3 extra steps
*/

// 3) traversing a tree
/*
    Two ways:
    Breadth-first Search
    Depth-first Search
*/

//3.a) bfs
// iteratively pseudocode
/*
    Create a queue (this can be an array) and a variable to store the values of nodes visited
    Place the root node in the queue
    Loop as long as there is anything in the queue
        Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        If there is a left property on the node dequeued - add it to the queue
        If there is a right property on the node dequeued - add it to the queue
    Return the variable that stores the values
*/

//3.b) dfs
//3.b.1) dfs inorder
//pseudocode inorder recursively
/*
    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        If the node has a left property, call the helper function with the left property on the node
        Push the value of the node to the variable that stores the values
        If the node has a right property, call the helper function with the right property on the node
    Invoke the helper function with the current variable
    Return the array of values
 */

//3.b.2) dfs preorder
//pseudocode preorder recursively
/*
    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        Push the value of the node to the variable that stores the values
        If the node has a left property, call the helper function with the left property on the node
        If the node has a right property, call the helper function with the right property on the node
    Invoke the helper function with the current variable
    Return the array of values
 */

//3.b.3) dfs postorder
//pseudocode postorder recursively
/*
    Create a variable to store the values of nodes visited
    Store the root of the BST in a variable called current
    Write a helper function which accepts a node
        If the node has a left property, call the helper function with the left property on the node
        If the node has a right property, call the helper function with the right property on the node
        Push the value of the node to the variable that stores the values
    Invoke the helper function with the current variable
    Return the array of values
 */

//bfs vs dfs
/*
    bfs - Lots of nodes to keep track of!
    dfs - Fewer nodes to keep track of

    more about dfs 
        inorder   - Used commonly with BST's Notice we get all nodes in the tree in their underlying order
        preorder  - Can be used to "export" a tree structure so that it is easily reconstructed or copied.
*/

// more about tree, bst
/*
    Trees are non-linear data structures that contain a root and child nodes
    Binary Trees can have values of any type, but at most two children for each parent
    Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater
    We can search through Trees using BFS and DFS
*/

//4) removing node, its really tough though
// it is divided into some cases

//4.a) no child, no problem hahaha
//Iteratively pseudocode of remove - no child
/*
    Find the parent of the node that needs to be removed and the node that needs to be removed
    If the value we are removing is greater than the parent node
        Set the right property of the parent to be null
    If the value we are removing is less than the parent node​
        Set the left property of the parent to be null
    Otherwise, the node we are removing has to be the root, so set the root to be null
*/

//4.b) one child, one problem, what is that?
//Iteratively pseudocode of remove - one child
/*
    Find the parent of the node that needs to be removed and the node that needs to be removed
    See if the child of the node to be removed is on the right side or the left side
    If the value we are removing is greater than the parent node​​
        Set the right property of the parent to be the child
    If the value we are removing is less than the parent node​
        Set the left property of the parent to be the child
    Otherwise, set the root property of the tree to be the child
*/

//4.c) two child, more problem, oh. we have to Find the Predecessor Node!, One Right, As left as possible
//Iteratively pseudocode of remove - two child
/*
    Find the parent of the node that needs to be removed and the node that needs to be removed
    Find the predecessor node and store that in a variable
    Set the left property of the predecessor node to be the left property of the node that is being removed
    If the value we are removing is greater than the parent node​​
        Set the right property of the parent to be the right property of the node to be removed
    If the value we are removing is less than the parent node​
        Set the left property of the parent to be the right property of the node to be removed
    Otherwise, set the root of the tree to be the right property of the node to be removed
*/

//code of insert, find, traversing and contains methods
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();
