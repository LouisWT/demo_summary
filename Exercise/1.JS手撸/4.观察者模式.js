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

  unsubscribe(type, fn) {
    if (!type || !fn || !this.listener[type]) return;
    let index = this.listener[type].indexOf(fn);
    if (index === -1) return;
    this.listener[type].splice(index, 1);
    this.unsubscribe(type, fn);
  }

  publish(type, ...args) {
    if (!type || !this.listener[type]) return;
    this.listener[type].forEach((callback) => {
      callback(...args);
    });
  }
}