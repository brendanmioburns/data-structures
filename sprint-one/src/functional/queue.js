var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //builder is linear
  var builder = 0;
  //size can go up and down
  var size = 0;
  //nextQueue is the next index as if the last dequeue'd value was *actually* removed or popped
  var nextQueue = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[builder] = value;
    size++;
    builder++;
  };

  someInstance.dequeue = function() {
    
    var currentValue = storage[nextQueue];
    nextQueue++;
    size--;

    return currentValue;  
  };

  someInstance.size = function() {
    if (size > 0) {
      return size;
    } else {
      return 0;
    }
  };

  return someInstance;
};
