var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //builder is linear
  var builder = 0;
  //size can go up and down
  var size = 0;
  //indexOfNextToLeave is the index of the property that is next in line to be dequeued (pretends as though the last dequeue'd value was *actually* removed or popped)
  var indexOfNextToLeave = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[builder] = value;
    size++;
    builder++;
  };

  someInstance.dequeue = function() {
    
    var currentValue = storage[indexOfNextToLeave];
    indexOfNextToLeave++;
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
