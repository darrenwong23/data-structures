var Tree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.parent = parent || null;
  newTree.children = [];

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value, this));
};

treeMethods.contains = function(target) {
  // depth first search
  return this.children.reduce(function(isFound, tree) {
    return isFound || tree.contains(target);
  }, this.value === target);

};



treeMethods.removeFromParent = function() {
  this.parent.children.splice(this.parent.children.indexOf(this), 1);
  this.parent = null;

};
