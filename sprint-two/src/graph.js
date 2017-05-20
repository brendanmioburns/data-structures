

// Instantiate a new graph
var Graph = function() {
  var graph = {};
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes.indexOf(node) !== -1) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(target) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === target) {
      this.nodes.splice(i, 1);
    }
  }
  //when target is removed from graph, this loop removes all edges containing that target, i.e. severs all ties with the removed target
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].indexOf(target) !== -1) {
      this.edges.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  
  if (this.edges.length === 0) {
    return false;
  }

  for (var i = 0; i < this.edges.length; i++) {
    return JSON.stringify(this.edges[i]) === (JSON.stringify([fromNode, toNode])) || JSON.stringify(this.edges[i]) === (JSON.stringify([toNode, fromNode]));
  }
  // var isEdge = false;

  // for (var i = 0; i < this.edges.length; i++) {
  //   if ((this.edges[i][0] === fromNode || this.edges[i][0] === toNode) && 
  //      (this.edges[i][1] === fromNode || this.edges[i][1] === toNode)) {
  //      isEdge = true;
  //   }
  //   return isEdge;
  // }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  for (var i = 0; i < this.edges.length; i++) {
    if (((this.edges[i][0] === fromNode) && (this.edges[i][1] === toNode)) || ((this.edges[i][0] === toNode) && (this.edges[i][1] === fromNode))) {
      this.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  // for (var i = 0; i < this.nodes.length; i++) {
  //   cb(this.nodes[i]);
  // }
  this.nodes.forEach(function(node) {
    cb(node);
  });
  
//   this.edges.forEach(function(edge) {
// })

  // for (var i = 0; i < this.edges.length; i++) {
  //   cb(this.edges[i][0]);
  //   cb(this.edges[i][1]);
  // }
  // return _.forEach(this.nodes, node => cb(node));
  // this.nodes.forEach(function(node) {
  //   cb(node);
  // });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


