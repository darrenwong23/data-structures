var doublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var oldTail = this.tail;
    var newTail = Node(value);
    this.tail = newTail;
    if (this.head === null) {
      this.head = newTail;
    } else {
      // only do this is "list" is non-empty
      oldTail.next = newTail;
    }
  };

  list.removeHead = function(){
    if(this.head === null) {
      // if empty, do nothing
    } else if (this.tail === this.head) {
      //if 1 element
      this.tail = null;
      var result = this.head.value;
      this.head = null;
      return result;
    } else {
      //if more than 1 element
      this.head = this.head.next;
      return this.head.value;
    }
  };

  list.contains = function(target){
    var currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
