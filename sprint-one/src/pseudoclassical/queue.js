var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length1 = 0;
  this.first = 0;
  this.last = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
  this.length1++;
};

Queue.prototype.dequeue = function(){
  if (this.length1 > 0) {
    this.first += 1;
    this.length1 -= 1;
    return this.storage[this.first - 1];
  }
};

Queue.prototype.size = function(){
  return this.length1;
};


