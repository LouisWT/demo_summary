var EventTarget = function() {
  this.listeners = {};
};

// 维护一个 listeners 对象
EventTarget.prototype.listeners = null;

// addEventListener 将针对每个 type 维护一个 listeners 数组
EventTarget.prototype.addEventListener = function(type, callback) {
  if(!(type in this.listeners)) {
    this.listeners[type] = [];
  }
  this.listeners[type].push(callback);
};

// removeEventListener 取出对应的 type 数组，将对应的 listener 移除，由于同一 listener 可以添加多次，所以是递归移除
EventTarget.prototype.removeEventListener = function(type, callback) {
  if(!(type in this.listeners)) {
    return;
  }
  var stack = this.listeners[type];
  for(var i = 0, l = stack.length; i < l; i++) {
    if(stack[i] === callback){
      stack.splice(i, 1);
      return this.removeEventListener(type, callback);
    }
  }
};

// 将事件 event 分发到这个 eventTarget
EventTarget.prototype.dispatchEvent = function(event) {
  if(!(event.type in this.listeners)) {
    return;
  }
  var stack = this.listeners[event.type];
  event.target = this;
  for(var i = 0, l = stack.length; i < l; i++) {
      stack[i].call(this, event);
  }
};