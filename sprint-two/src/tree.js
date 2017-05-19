var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  
  this.children.push(child);
};

treeMethods.contains = function(target, root) {
  //selectedRoot is the root we're currently on. If not present, start at the top at treeMethods
  var selectedRoot = root || this;
  var selectedRootChildren = selectedRoot.children;
  //base case:
  if (selectedRoot.value === target) {
    return true;
  }
  //loops through root's array of possible children
  for (var i = 0; i < selectedRootChildren.length; i++) {
    var child = selectedRootChildren[i];
    //perform recursion on each child in array (selectedRoot can also be 'this')
    if (selectedRoot.contains(target, child)) {
      return true;
    }
  }
  //iterated through all children arrays and could not find target
  return false;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
//logarithmic