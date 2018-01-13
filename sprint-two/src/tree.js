var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};
treeMethods.contains = function(target){
  if (this.value === target) return true;
  return _.some(this.children, function(child) {
    return child.contains(target);
  });
};
