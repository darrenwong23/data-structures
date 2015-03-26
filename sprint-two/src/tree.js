var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // depth first search
  return this.children.reduce(function(isFound, tree) {
    return isFound || tree.contains(target);
  }, this.value === target);

  // breadth first search using a queue to store values

  // var queue = new Queue();
  // queue.enqueue(this);

  // while (queue.size() > 0) {
  //   var highestTree = queue.dequeue();
  //   if (highestTree.value === target) {
  //     return true;
  //   }
  //   highestTree.children.forEach(function(child) {
  //     queue.enqueue(child);
  //   });
  // }
  // return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   this.length1 = 0;
//   this.first = 0;
//   this.last = 0;
//   this.storage = {};
// };

// Queue.prototype.enqueue = function(value) {
//   this.storage[this.last] = value;
//   this.last++;
//   this.length1++;
// };

// Queue.prototype.dequeue = function() {
//   if (this.length1 > 0) {
//     this.first += 1;
//     this.length1 -= 1;
//     return this.storage[this.first - 1];
//   }
// };

// Queue.prototype.size = function() {
//   return this.length1;
// };


