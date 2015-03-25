var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length1 = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.length1] = value;
  this.length1++;
};

Stack.prototype.pop = function() {
  if (this.length1 > 0) {
    this.length1--;
    return this.storage[this.length1];
  }
};

Stack.prototype.size = function() {
  return this.length1;
};
