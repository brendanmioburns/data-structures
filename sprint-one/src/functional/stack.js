var Stack = function() {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.count = 0;

  someInstance.push = function(value) {
    someInstance.storage[someInstance.count] = value;
    someInstance.count ++;
  };

  someInstance.pop = function() {
    var leavingValue = someInstance.storage[someInstance.count - 1];
  
    if (someInstance.count > 0) {
      someInstance.count--;
    } 
    return leavingValue;
  };

  someInstance.size = function() {
    return someInstance.count;
  };

  return someInstance;
};
