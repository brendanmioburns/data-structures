var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);

    if (!list.head) {
      list.head = newTail;
    }
    if (list.tail) {
      list.tail.next = newTail;
    }
    list.tail = newTail;
  };

  list.removeHead = function() {
    var removedValue = this.head.value;
    this.head = this.head.next;
    return removedValue;
  };

  list.contains = function(target, nextNode) {
    
    var node = nextNode || this.head;

    if (node.value === target) {
      return true;
    } else if (node.next !== null) {
      return this.contains(target, node.next);
    } else {
      return false;
    }
  };
//If nextNode is not provided as an extra parameter:
  //   var currentNode = this.head;

  //   while (currentNode.next) {
  //     if (currentNode.value === target) {
  //       return true;
  //     }
  //     currentNode = currentNode.next; 
  //   }

  //   if (currentNode.value === target) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
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
