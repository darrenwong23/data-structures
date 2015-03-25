var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var first = 0;
  var last = 0;


  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last += 1;
    length += 1;
  };

  someInstance.dequeue = function(){
    if (length > 0) {
      first += 1;
      length -= 1;
      return storage[first - 1];
    }
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
