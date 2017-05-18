var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.builder = 0;
  this.count = 0;
  this.indexOfLeavingValue = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.builder] = value;
  this.count++;
  this.builder++;
};

Queue.prototype.dequeue = function() {
    
  var leavingValue = this.storage[this.indexOfLeavingValue];

  if (this.count > 0) {
    this.count--;
  }
  this.indexOfLeavingValue++;

  return leavingValue;  
};

Queue.prototype.size = function() {
  return this.count;
};