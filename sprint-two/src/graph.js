

// Instantiate a new graph
var Graph = function(){
  this.nodes = [];


} ;

// Add a node to the graph, passing in the node's value.

Graph.prototype.addNode = function(value){
  var node = { edges: [], value: value};
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target){
  return _.some(this.nodes, function(node){
    return node.value === target;
  });
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(target){
  var del = this.nodes.indexOf(_.find(this.nodes, function(node){
      return node.value === target;
  }));
  if (del !== -1){
    this.nodes.splice(del, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNodeValue, toNodeValue){
  var origin = _.find(this.nodes, function(node){
      return node.value === fromNodeValue;
  });
  var destination = _.find(this.nodes, function(node){
    return node.value === toNodeValue;
  });
  return (origin.edges.indexOf(destination) >= 0) ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNodeValue, toNodeValue){
  var origin = _.find(this.nodes, function(node){
      return node.value === fromNodeValue;
    });
  var destination = _.find(this.nodes, function(node){
      return node.value === toNodeValue;
    });
    origin.edges.push(destination);
    destination.edges.push(origin);

  };

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNodeValue, toNodeValue){
  var origin = _.find(this.nodes, function(node){
      return node.value === fromNodeValue;
  });
  var destination = _.find(this.nodes, function(node){
    return node.value === toNodeValue;
  });
  var dIndex = origin.edges.indexOf(destination);
  var oIndex = destination.edges.indexOf(origin);
  origin.edges.splice(dIndex,1);
  destination.edges.splice(oIndex,1);
};


// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node){
    cb(node.value);
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
