// 订阅服务中心
class Dep {
  constructor() {
    this.subs = []
  }

  addSub(sub) {
    // sub 是 Watcher 实例
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  } 
}

// es6 只有静态方法，没有静态属性
Dep.target = null;

// Watcher 即订阅者
class Watcher {
  constructor(obj, key, cb) {
    Dep.target = this;
    this.cb = cb;
    this.obj = obj;
    this.key = key;
    // 触发属性的 getter 添加监听
    this.value = obj[key];
    Dep.target = null;
  }

  update() {
    this.value = this.obj[this.key];
    this.cb(this.value);
  }
}

// 监听数据变化 
function observe(data) {
  if (!data || typeof data !== 'object') return;
  Object.keys(data).forEach(key => {
    defineReative(data, key, data[key]);
  })
}

function defineReative(data, key, val) {
  // 如果值也是对象，监听子属性
  observe(val);
  let dp = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: function() {
      // 将 Watcher 添加到订阅
      if (Dep.target) {
        dp.addSub(Dep.target);
      }
      return val;
    },
    set: function(newVal) {
      console.log('监听到数据变化', val, '->',newVal);
      val = newVal;
      // 通知订阅器
      dp.notify();
    }
  })
}

let data = {
  name: 'kind'
}

function update(value) {
  console.log('dom change', value);
}

observe(data);
// 模拟解析到 {{name}}触发的操作
new Watcher(data, 'name', update);

data.name = 'here';
console.log(data.name);