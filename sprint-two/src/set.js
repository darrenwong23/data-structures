var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  item = JSON.stringify(item);
  if(item in this.storage) {
    // do nothing
  } else {
    this.storage[item] = true;
  }
};

setPrototype.contains = function(item) {
  item = JSON.stringify(item);
  return this.storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  item = JSON.stringify(item);
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
