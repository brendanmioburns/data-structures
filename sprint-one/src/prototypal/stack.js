var Stack = function() {
  
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  var leavingValue = this.storage[this.count - 1];

  if (this.count) {
    this.count--;
  }
  return leavingValue;
};

stackMethods.size = function() {
  return this.count;
};



