var rbTree = function (rootValue) {

  this.root = new Tnode(rootValue, 1);

};

rbTree.prototype.leftRotate = function() {


};

rbTree.prototype.rightRotate = function() {

};

rbTree.prototype.add = function(value, node) {
  value = value || this.root;

  if (value === node.value) {
    // do nothing because node value already exists
  } else if (value < node.value) {
    if (node.left !== null) {

      rbTree.prototype.add(value, node.left);
    } else {
      node.left = new rbTree(value);
    }
  } else { // value > node.value
    if (node.right !== null) {
      rbTree.prototype.add(value, node.right);

    } else {
      node.right = new rbTree(value);
    }
  }
};

rbTree.prototype.remove = function() {

};





rbTree.prototype.contains = function(node, value) {
    if (value === node.value) {
    return true;
  } else if (value < node.value) {
    return node.left === null ? false : node.left.contains(value);
  } else {
    return node.right === null ? false : node.right.contains(value);
  }

};


rbTree.prototype.bfs = function(node, callback) {
  callback(node.value);
  if (node.left !== null) {
    node.left.bfs(node, callback);
  }
  if (node.right !== null) {
    node.right.bfs(node, callback);
  }
};


var Tnode = function(value, color) {

  this.value = value || null;

  //black is 1, red is 0
  this.color = color || 1;

  this.left = null;
  this.right = null;
  this.parent = null;

}