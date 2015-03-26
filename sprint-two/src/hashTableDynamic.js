var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

};

HashTable.prototype.insert = function(k, v){
  //returns index between - and this._limit by hashing key
  var i = getIndexBelowMaxForKey(k, this._limit);

  //if not empty, then we have to check whether exists, it it doesn't push
  var container = this._storage.get(i);
  var isKeyFound = false;


  //if EMPTY container or UNDEFINED container
  if(container === undefined ) {
    this._storage.set(i, [[k, v]]);
  } else {
    //see whether tuple already exists for given key
    _.each(container, function(tuple) {

      if(tuple[0] === k) {
        tuple[1] = v;
      }
    });

    //add tuple to container if it doesn't exist
    if(!isKeyFound || container.length === 0) {
      container.push([k,v]);
      this._size += 1;
      if ((this._size / this._limit) > 0.75) {
        this.expand();
      }
    }
  }


};
HashTable.prototype.shrink = function() {
 this._limit /= 2;
  var _newStorage = LimitedArray(this._limit);
  this._storage.each(function(container) {
    container.forEach(function(tuple) {
      _newStorage.insert(tuple[0], tuple[1]);
    });
  });

  this._storage = this._newStorage;

};

HashTable.prototype.expand = function() {
  this._limit *= 2;
  var _newStorage = LimitedArray(this._limit);
  this._storage.each(function(container) {
    container.forEach(function(tuple) {
      _newStorage.insert(tuple[0], tuple[1]);
    });
  });

  this._storage = this._newStorage;
};

HashTable.prototype.size = function(){
  return this._storage.size();
};

HashTable.prototype.print = function(){
  this._storage.print();
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = null;

  var container = this._storage.get(i);
  if(container === undefined) return null;

  //see whether container has desired tuple
  _.each(container, function(tuple){
    if( result === null && tuple[0] === k) result = tuple[1];
  });

  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var container = this._storage.get(i);
  _.each(container,function(tuple, i, collection) {
    if (tuple[0] === k) {
      collection.splice(i, 1);
      this._size -= 1;

      if ((this._size / this._limit) < 0.25) {
        this.reduce();
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
