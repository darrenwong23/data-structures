var Graph = function(){
  this.nodeContainer = {};

};

Graph.prototype.addNode = function(node) {
  this.nodeContainer[node] = [];
};

Graph.prototype.contains = function(node) {
  return (node in this.nodeContainer);
};

Graph.prototype.removeNode = function(node) {
  var edgeList = this.nodeContainer[node];

  _.each(edgeList, function(edge) {
    this.nodeContainer[edge].splice(this.nodeContainer[edge].indexOf(node), 1);
  });

  delete this.nodeContainer[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edgeList = this.nodeContainer[fromNode];
  return _.contains(edgeList, toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodeContainer[fromNode].push(toNode);
  this.nodeContainer[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodeContainer[fromNode].splice(this.nodeContainer[toNode].indexOf(toNode), 1);
  this.nodeContainer[toNode].splice(this.nodeContainer[toNode].indexOf(fromNode), 1);
};

Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodeContainer, function(value, key) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */




