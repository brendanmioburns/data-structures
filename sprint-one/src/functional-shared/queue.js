var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.builder = 0;
  someInstance.count = 0;
  someInstance.indexOfLeavingValue = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.builder] = value;
  this.count++;
  this.builder++;
};

queueMethods.dequeue = function() {
    
  var leavingValue = this.storage[this.indexOfLeavingValue];

  if (this.count > 0) {
    this.count--;
  }

  this.indexOfLeavingValue++;


  return leavingValue;  
};

queueMethods.size = function() {
  return this.count;
};


