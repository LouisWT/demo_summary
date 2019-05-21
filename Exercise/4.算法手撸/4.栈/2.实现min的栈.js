class Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.min = null;
  }
  push(val) {
    this.stack.push(val);
    if (!this.min || this.min > val) {
      this.min = val;
      this.minStack.push(val);
    } else {
      this.minStack.push(this.min);
    }
  }
  pop() {
    this.minStack.pop();
    this.min = this.minStack[this.minStack.length - 1];
    return this.stack.pop();
  }
  min() {
    return this.min;
  }
}