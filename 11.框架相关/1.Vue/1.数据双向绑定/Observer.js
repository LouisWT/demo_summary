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
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: false,
    get: function() {
      // 添加订阅者
      return val;
    },
    set: function(newVal) {
      console.log('监听到数据变化', val, '->',newVal);
      val = newVal;
      // 通知订阅器
    }
  })
}

let data = {
  name: 'kind'
}

observe(data);

data.name = 'here';
console.log(data.name);

// 订阅者
function Dep() {
  this.subs = [];
}

Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub);
  },
  notify: function () {
    this.subs.forEach(sub => sub.update());
  }
}
