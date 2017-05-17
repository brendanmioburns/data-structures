var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  var count = 0;
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    count ++;
    key ++;
  };

  someInstance.dequeue = function() {
    
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
