var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);

    if (this.head === null) {
//first instantiation --- head and tail point to the same node the first time only.
      this.head = node;

    } else if (JSON.stringify(this.head) === JSON.stringify(this.tail)) {
      this.head.next = node;

    } else {
      
  
      while (this.head.next) {
        this.head = this.head.next;
      }

      this.head.next = node;

      //this.addToTail(node);
    // Any instantiation after the first time
      // var current = this.tail;
      // if (this.tail.next) {
      //   this.tail = this.tail.next;
      // }
      
      // this.tail.next = node;
    }

    this.tail = node;
    // this.tail.next = node;
  };

  list.removeHead = function() {
    this.head = this.head.next;
  };

  list.contains = function(target) {
    
    if (this.value === target) {
      return true;
    }

    if (this.value !== target) {
      return this.contains(target);

    } else {
      return false;
    }
    // each(this.head, child => {
    //   for (var key in child) {
    //     if (child.value === target) {
    //       return true;
    //     }
    //   }
    // });

    // for (var key in this.head) {
    //   while (this.head.next) {

    //     return true
    //   }
    //   return false
    // }
    // return this.hasOwnProperty(target);
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
