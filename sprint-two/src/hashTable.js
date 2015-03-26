var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //returns index between - and this._limit by hasing key
  var i = getIndexBelowMaxForKey(k, this._limit);

  //if not empty, then we have to check whether exists, it it doesn't push
  var container = this._storage.get(i);
  var isKeyFound = false;


  //if EMPTY container or UNDEFINED container, do this
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
    if(!isKeyFound || container.length ===0) container.push([k,v]);
  }


};


HashTable.prototype.print = function(){
  this._storage.print();
}

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
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
