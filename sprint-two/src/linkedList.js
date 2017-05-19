var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    var currentNode = this.head;

    if (this.head === null) {
//first instantiation --- head and tail point to the same node the first time only.
      this.head = node;
    } else {
      
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
//second node only runs this line below
      currentNode.next = node;
    }
    this.tail = node;
  };

  list.removeHead = function() {
    var removedValue = this.head.value;
    this.head = this.head.next;
    return removedValue;
  };

  list.contains = function(target) {
    
    var currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next; 
    }

    if (currentNode.value === target) {
      return true;
    } else {
      return false;
    }
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
