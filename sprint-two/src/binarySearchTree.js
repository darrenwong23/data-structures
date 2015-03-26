var BinarySearchTree = function(value){
  var binarySearchTree = Object.create(BinarySearchTree.prototype);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;
};

BinarySearchTree.prototype = {};
BinarySearchTree.prototype.insert = function(value) {
  // check this node
    // if value is same, do nothing
  // if less that this node's value and node's left !== null
    // make the node this node's left node
  // else if node's left === null
    // make node's left a new node with the value
  if (value === this.value) {
    // do nothing because this value already exists
  } else if (value < this.value) {
    if (this.left !== null) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else { // value > this.value
    if (this.right !== null) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    return this.left === null ? false : this.left.contains(value);
  } else {
    return this.right === null ? false : this.right.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
