// 单体模式关键在于保证一个特定类仅有一个实例

// 1. 静态属性法
function Universe() {
  if (typeof Universe.instance === 'object') {
    return Universe.instance;
  }
  this.bang = 'pong';

  Universe.instance = this;

  return this;
}

// 2. 即时函数法
var Universe;

(function () {
  var instance;
  Universe = function () {
    if (instance) {
      return instance;
    }
    instance = this;
    this.bang = 'big';
  }
}())


// 预期
let uni1 = new Universe();
let uni2 = new Universe();
console.log(uni1 === uni2);