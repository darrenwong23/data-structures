describe('redBlackTree', function() {
  var redBlackTree;

  beforeEach(function() {
    redBlackTree = new rbTree(5);
  });

  it('should have methods named "insert", "contains", and "remove', function() {
    expect(redBlackTree.add).to.be.a("function");
    expect(redBlackTree.remove).to.be.a("function");
    expect(redBlackTree.contains).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    redBlackTree.add(2);
    redBlackTree.add(3);
    redBlackTree.add(7);
    redBlackTree.add(6);
    expect(redBlackTree.left.right.value).to.equal(3);
    expect(redBlackTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    redBlackTree.add(2);
    redBlackTree.add(3);
    redBlackTree.add(7);
    expect(redBlackTree.contains(7)).to.equal(true);
    expect(redBlackTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    redBlackTree.add(2);
    redBlackTree.add(3);
    redBlackTree.depthFirstLog(func);

    expect(array).to.eql([5,2,3]);
  });
});
