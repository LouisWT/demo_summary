// 定义两个栈
// push 数据时，push 进一个空的栈，然后将另一个栈中的所有数据pop，依次push进第二个栈
// pop 数据时，从非空的栈 pop 数据
class Quene {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(value) {
    this.stack1.push(value);
  }

  shift() {
    if (this.stack2.length == 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

let s = new Quene();
for (let i = 0; i < 10; i++) {
  s.push(i);
}
for (let i = 0; i < 10; i++) {
  console.log(s.shift());
}