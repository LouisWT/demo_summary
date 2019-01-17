// 订阅模式
var publisher = {
  subscribers: {
    any: []
  },

  subscribe: function (fn, type) {
    type = type || 'any';
    if (typeof this.subscribers[type] === undefined) {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  },

  unsubscribe: function (fn, type) {
    type = type || 'any';
    var subs = this.subscribes[type];
    if (subs === undefined) return;
    var index = subs.indexOf(fn);
    if (index === -1) return;
    this.subscribes[type].splice(index, 1);
    this.unsubscribe(fn, type);
  },
  
  publish: function (arg, type) {
    type = type || 'any';
    var subs = this.subscribes[type];
    for (var i = 0; i < subs.length; i++) {
      subs[i](arg);
    }
  }
}