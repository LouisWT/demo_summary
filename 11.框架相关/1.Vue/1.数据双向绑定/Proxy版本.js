function observe(obj) {
  if (!obj || typeof obj !== 'object') {
    return;
  }

  return new Proxy(obj, {
    get: function(target, key, receiver) {
      // 添加订阅
      return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
      // 通知订阅者
      return Reflect.set(target, key, value, receiver);
    }
  })
}