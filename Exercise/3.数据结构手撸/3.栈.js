// 使用队列实现栈
class Stack {
  constructor() {
    this.quene1 = [];
    this.quene2 = [];
  }
  push(value) {
    let emptyQ = this.quene1.length === 0 ? this.quene1 : this.quene2;
    let notEmptyQ = this.quene1.length !== 0 ? this.quene1 : this.quene2;
    emptyQ.push(value);
    while(notEmptyQ.length > 0) {
      emptyQ.push(notEmptyQ.shift());
    }
  }
  pop() {
    let notEmptyQ = this.quene1.length !== 0 ? this.quene1 : this.quene2;
    return notEmptyQ.shift();
  }
}

let s = new Stack();
for (let i = 0; i < 10; i++) {
  s.push(i);
}
for (let i = 0; i < 10; i++) {
  console.log(s.pop());
}