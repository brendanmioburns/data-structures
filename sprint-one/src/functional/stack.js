var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    var key = count;
    
    storage[key] = value;
    someInstance[key] = value;
    size ++;
    count ++;
  };

  someInstance.pop = function() {
    
    for (var key in storage) {

      if (key > count) {
        count = key;
        delete storage[key];

        if (size > 0) {
          size --;
        }
      }
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
