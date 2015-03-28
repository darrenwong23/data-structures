describe('redBlackTree', function() {
  var redBlackTree;

  beforeEach(function() {
    redBlackTree = new rbTree(10);
  });


  it('intialize root', function(){
    expect(redBlackTree.root.value).to.equal(10);
  });

  // it('add 1 node', function(){
  //   redBlackTree.add(2);

  //   expect(redBlackTree.root.left.value).to.equal(2);
  // });

  // it('should insert values at the correct location in the tree', function(){
  //   redBlackTree.add(2);
  //   redBlackTree.add(3);
  //   redBlackTree.add(7);
  //   redBlackTree.add(6);
  //   expect(redBlackTree.root.left.right.value).to.equal(3);
  //   expect(redBlackTree.root.right.left.value).to.equal(6);
  // });

  // it('should have a working "contains" method', function(){
  //   redBlackTree.add(2);
  //   redBlackTree.add(3);
  //   redBlackTree.add(7);
  //   expect(redBlackTree.contains(7)).to.equal(true);
  //   expect(redBlackTree.contains(8)).to.equal(false);
  // });

  // it('should execute a callback on every value in a tree using "bfs"', function(){
  //   var array = [];
  //   var func = function(value){ array.push(value); };
  //   redBlackTree.add(2);
  //   redBlackTree.add(3);
  //   redBlackTree.bfs(func);

  //   expect(array).to.eql([5,2,3]);
  // });


  // it('2ad', function(){
  //   var array = [];
  //   var arr2 = [];
  //       redBlackTree.root.color = 'black';

  //   var func = function(value){ array.push(value); };
  //   var f2 = function(color){ arr2.push(color); };

  //   redBlackTree.add(2);
  //   redBlackTree.root.left.color = 'red';
  //   redBlackTree.add(6);
  //   redBlackTree.root.right.color = 'red';





  //   redBlackTree.add(1);


  //   redBlackTree.bfs(func);
  //   redBlackTree.bfs2(f2);


  //   expect(array).to.eql([5,2,1,6]);
  //  expect(arr2).to.eql([0,1,0,1]);



  // });


    it('left', function(){
    var array = [];

    redBlackTree.root.color = 'black';
    var func = function(value){ array.push(value); };


    redBlackTree.add(8);
    redBlackTree.add(9);
    redBlackTree.add(4);
    redBlackTree.add(12);

    redBlackTree.rightRotate(redBlackTree.root,redBlackTree.root );

    redBlackTree.bfs(func);
array = [];
    redBlackTree.leftRotate(redBlackTree.root,redBlackTree.root );

    redBlackTree.bfs(func);
    expect(array).to.eql([5,2,1,6]);




  });

});



