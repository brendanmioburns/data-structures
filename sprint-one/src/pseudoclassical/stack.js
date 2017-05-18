var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  var leavingValue = this.storage[this.count - 1];
  
  if (this.count) {
    this.count--;
  }
  return leavingValue;
};

Stack.prototype.size = function() {
  return this.count;
};
