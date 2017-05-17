var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var key = size - 1;

  var arrayOfKeys = Object.keys(storage);
  // Implement the methods below
  someInstance.push = function(value) {
    
    size ++;
    storage[key] = value;
  };

  someInstance.pop = function() {
    
    if (size > 0) {
      size--;
    }
    return arrayOfKeys[arrayOfKeys.length - 1];
  };


  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
