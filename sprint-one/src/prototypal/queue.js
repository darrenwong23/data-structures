var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.length1 = 0;
  someInstance.first = 0;
  someInstance.last = 0;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.length1 += 1;
    this.last += 1;
  },
  dequeue: function() {
    if (this.length1 > 0) {
      this.length1 -= 1;
      this.first += 1;
      return this.storage[this.first - 1];
    }
  },
  size: function() {
    return this.length1;
  }
};


