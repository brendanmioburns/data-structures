var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = 0;
    storage[key] = value;
    key ++;
  };

  someInstance.dequeue = function() {
    var key = 0;
    
  };

  someInstance.size = function() {
  };

  return someInstance;
};
