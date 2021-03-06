

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(target) {
  for (var key in this[target]) {
    this[key][target] = false;
  }
  delete this[target];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode][toNode] === true;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode][toNode] = true;
  this[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode][toNode] = false;
  this[toNode][fromNode] = false;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



