/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
  this.min = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (x < this.min) this.min = x;
  this.minStack.push(this.min);
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.minStack.pop();
  if (this.minStack.length === 0) this.min = Infinity;
  else this.min = this.minStack[this.minStack.length - 1];
  return this.stack.pop() || null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1] || null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1] || null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

