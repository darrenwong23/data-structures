


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstanceOf = Object.create(stackMethods);

  someInstanceOf.length1 = 0;
  someInstanceOf.storage = {};
  return someInstanceOf;
};


var stackMethods = {
  push: function(value) {
    this.storage[this.length1++] = value;
  },
  pop: function() {
    if (this.length1 > 0) {
      var result = this.storage[this.length1 - 1];
      delete this.storage[this.length1--];
      return result;
    }
  },
  size: function() {
    return this.length1;
  }
};

