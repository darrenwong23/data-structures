var rbTree = function (rootValue) {

  this.root = new Tnode(rootValue, 'black');

};


rbTree.prototype.insert = function(value, node) {
  //node = node || this.root;

  if (value === node.value) {
    // do nothing because node value already exists
  } else if (value < node.value) {
    if (node.left !== null) {

      return rbTree.prototype.insert(value, node.left);
    } else {
      node.left = new Tnode(value, 'red');
      node.left.parent = node;
      return node.left;
    }
  } else { // value > node.value
    if (node.right !== null) {
      return rbTree.prototype.insert(value, node.right);

    } else {
      node.right = new Tnode(value, 'red');
      node.right.parent = node;
      return node.right;
    }
  }

};

rbTree.prototype.add = function(value) {

  //1) perform std BST insertioins and made the color of newly inserted as red
  var node = rbTree.prototype.insert(value, this.root);
  6rxc7ufg/i
  //2)fix Insert

  debugger;
  rbTree.prototype.fixInsert(this.root, node);

}


rbTree.prototype.fixInsert = function(root, node) {

  //if(node.value ===1) debugger;


  //iterate until node is not the root and z's parent color is red
  while ( node !== root && node.parent.color === 'red') {


    var uncle;
    //find uncle and store uncle in y
    if (node.parent === node.parent.parent.left) {
      uncle = node.parent.parent.right;
    } else {
      uncle = node.parent.parent.left;
    }


    //uncle is black
    if (uncle === null || uncle.color === 'black') {
      var x = node;
      //left left
      //1right rotate g
      //2swap colors of g and p

       if (x.parent.left === x && x.parent.parent.left === x.parent) {
        var color = x.parent.color;
        x.parent.color = x.parent.parent.color;
        x.parent.parent.color = color;


        rbTree.prototype.rightRotate(root, x.parent.parent);
      }

      else if (x.parent.right === x && x.parent.parent.right === x.parent) {
        var color = x.parent.color;
        x.parent.color = x.parent.parent.color;
        x.parent.parent.color = color;


        rbTree.prototype.leftRotate(root, x.parent.parent);
      }

      //left right
      //lswap node and gp
      // left rotate parent
      //right rotate gp
      else if (x.parent === x.parent.parent.left && x.parent.right === x) {
        var color = x.color;
        x.color = x.parent.parent.color;
        x.parent.parent.color = color;

        rbTree.prototype.leftRotate(root, x.parent);
        rbTree.prototype.rightRotate(root, x.parent.parent);

      }

      //right left
      //lswap node and gp
      // right rotate parent
      //left rotate gp
      else if (x.parent === x.parent.parent.right && x.parent.left === x) {
        var color = x.color;
        x.color = x.parent.parent.color;
        x.parent.parent.color = color;

        rbTree.prototype.rightRotate(root, x.parent);
        rbTree.prototype.leftRotate(root, x.parent.parent);
      }


    } else {
          // if uncle is RED, do following
    //i) change color of parent and uncle as BLACK
    //ii) change color of gp as RED
    //iii) move z to grand parent
      node.parent.color = 'black';
      uncle.color = 'black';

      node.parent.parent.color = 'red';

      node = node.parent.parent;

    }


  }// end of while loop

  root.color = 'black';

};

rbTree.prototype.leftRotate = function(root, x) {

  //y points to right child of x
  var y = x.right;

  // store y's left subtree to x's right child
  x.right = y.left;

  //update parent point of x's right
  if(x.right != null) {
    x.right.parent = x;
  }

  //update y's parent pointer
  y.parent = x.parent;

  //if x's parent is null make y root of the rbTree
  if(x.parent === null) {
    root = y;
  }
  //replace y with x
  else if (x === x.parent.left) {
    x.parent.left = y;
  } else {
    x.parent.right = y;
  }

  //make x as left child of y
  y.left = x;

  x.parent = y;

}


rbTree.prototype.rightRotate = function(root, y) {

  var x = y.left;

  y.left = x.right;

  if(x.right != null) {
    x.right.parent = y;
  }

  x.parent = y.parent;

  if(x.parent === null) {
    root = x;
  }
  else if (y === y.parent.left) {
    y.parent.left = x;
  } else {
    y.parent.right = x;
  }

  x.right = y;

  y.parent = x;
}


rbTree.prototype.remove = function() {

};


rbTree.prototype.contains = function(value, node) {
   node = node || this.root;
    if (value === node.value) {
    return true;
  } else if (value < node.value) {
    return node.left === null ? false : rbTree.prototype.contains(value, node.right);
  } else {
    return node.right === null ? false : rbTree.prototype.contains(value, node.right);
  }

};


rbTree.prototype.bfs = function(callback, node) {

  node = node || this.root;
  callback(node.value);
  if (node.left !== null) {
    rbTree.prototype.bfs(callback, node.left);
  }
  if (node.right !== null) {
    rbTree.prototype.bfs(callback, node.right);
  }
};

rbTree.prototype.bfs2 = function(callback, node) {

  node = node || this.root;
  callback(node.color);
  if (node.left !== null) {
    rbTree.prototype.bfs2(callback, node.left);
  }
  if (node.right !== null) {
    rbTree.prototype.bfs2(callback, node.right);
  }
  //console.dir(node);
};

var Tnode = function(value, color) {

  this.value = value || null;

  //black is 1, red is 0
  this.color = color || 'red';


  this.left = null;
  this.right = null;
  this.parent = null;

}
