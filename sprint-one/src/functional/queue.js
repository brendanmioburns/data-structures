var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  //builder is linear
  someInstance.builder = 0;
  //size can go up and down
  someInstance.count = 0;
  //indexOfLeavingValue is the index of the property that is next in line to be dequeued (pretends as though the last dequeue'd value was *actually* removed or popped)
  someInstance.indexOfLeavingValue = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.storage[someInstance.builder] = value;
    someInstance.count++;
    someInstance.builder++;
  };

  someInstance.dequeue = function() {
    
    var leavingValue = someInstance.storage[someInstance.indexOfLeavingValue];

    if (someInstance.count > 0) {
      someInstance.count--;
    }

    someInstance.indexOfLeavingValue++;


    return leavingValue;  
  };

  someInstance.size = function() {
    return someInstance.count;
  };

  return someInstance;
};
