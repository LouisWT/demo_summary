class Publisher {
  constructor() {
    this.listener = {}
  }

  subscribe(type, fn) {
    if (!type || !fn) return;
    if (!this.listener[type]) {
      this.listener[type] = [];
    }
    this.listener[type].push(fn)
  }

  once(type, fn) {
    if (!type || !fn) return;
    if (!this.listener[type]) {
      this.listener[type] = [];
    }
    fn.tag = 'once';
    this.listener[type].push(fn)
  }

  unsubscribe(type, fn) {
    if (!type || !fn || !this.listener[type]) return;
    let index = this.listener[type].indexOf(fn);
    if (index === -1) return;
    this.listener[type].splice(index, 1);
    this.unsubscribe(type, fn);
  }

  publish(type, ...args) {
    if (!type || !this.listener[type]) return;
    let callbacks = this.listener[type];
    for (let i = 0; i < callbacks.length; i++) {
      callbacks[i](...args);
      // 删除第 i 个回调，并且将 i 减1
      if (callbacks[i].tag === 'once') {
        callbacks.splice(i, 1);
        i--;
      }
    }
  }
}
