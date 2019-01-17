module.exports = MyPromise;

// https://github.com/xieranmaya/blog/issues/3
// 1. Promise 状态穿透
// 2. 不同 Promise 实现兼容
// 3. 回调函数异步调用
// 4. 异步回调函数不同会让 Promise 有不同的性能，可以 node 端首选 process.nextTick, 移动端可以使用 setTimeout

function MyPromise(executor) {
  // 很关键，不然setTimeout的调用 this丢失，得不到想要的结果
  const self = this;
  self.status = 'pending';
  self.data = undefined;
  self.onResolvedCallback = [];
  self.onRejectedCallback = [];

  function resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }
    // 异步调用分片
    setTimeout(function() {
      if (self.status === 'pending') {
        self.status = 'resolved';
        self.data = value;
        for (let callback of self.onResolvedCallback) {
          callback.call(self, value);
        }
      }
    })
  }

  function reject(reason) {
    setTimeout(function() {
      if (self.status === 'pending') {
        self.status = 'rejected';
        self.data = reason;
        for (let callback of self.onRejectedCallback) {
          callback.call(self, reason);
        }
      }
    })
  }

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

// 不同 Promise 实现之间需要无缝的可交互，比如 Q 的 Promise，ES6的 Promise 和自己实现的 MyPromise 之间，应该是可以互相调用的
// 此处用MyPromise来代表我们实现的Promise
// new MyPromise(function(resolve, reject) { // 我们实现的Promise
//   setTimeout(function() {
//     resolve(42)
//   }, 2000)
// }).then(function() {
//   return new Promise.reject(2) // ES6的Promise
// }).then(function() {
//   return Q.all([ // Q的Promise
//     new MyPromise(resolve=>resolve(8)), // 我们实现的Promise
//     new Promise.resolve(9), // ES6的Promise
//     Q.resolve(9) // Q的Promise
//   ])
// })
// https://promisesaplus.com/#point-46
function resolvePromise(promise2, x, resolve, reject) {
  // 执行过一次状态就确定了，所以用这个状态位防止重复调
  let thenCalledOrThrow = false;

  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise!'))
  }
  if (x instanceof MyPromise) {
    // 如果x的状态是 pending，那么等待其 fulfilled 或 rejected
    if (x.status === 'pending') {
      return x.then(function (value) {
        resolvePromise(promise2, value, resolve, reject);
      }, reject);
    } else {
      return x.then(resolve, reject);
    }
  }
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      const then = x.then;
      if (typeof then === 'function') {
        then.call(x, function rs(y) {
          if (thenCalledOrThrow) return;
          thenCalledOrThrow = true;
          return resolvePromise(promise2, y, resolve, reject);
        }, function rj(r) {
          if (thenCalledOrThrow) return;
          thenCalledOrThrow = true;
          return reject(r);
        })
      } else {
        return resolve(x);
      }
    } catch(err) {
      if (thenCalledOrThrow) return;
      thenCalledOrThrow = true;
      return reject(err);
    }
  } else {
    return resolve(x);
  }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  const self = this;
  let promise2;

  onResolved = typeof onResolved === 'function' ? onResolved : function (v) { return v; };

  onRejected = typeof onRejected === 'function' ? onRejected : function (r) { throw r; }

  if (self.status === 'resolved') {
    promise2 = new MyPromise(function (resolve, reject) {
      setTimeout(function () {
        try {
          const x = onResolved(self.data);
          resolvePromise(promise2, x, resolve, reject);
        } catch (err) {
          reject(err);
        }
      })
    })
  }

  if (self.status === 'rejected') {
    promise2 = new MyPromise(function (resolve, reject) {
      setTimeout(function () {
        try {
          const x = onRejected(self.data);
          resolvePromise(promise2, x, resolve, reject);
        } catch (err) {
          reject(err);
        }
      })
    })
  }

  if (self.status === 'pending') {
    promise2 = new MyPromise(function (resolve, reject) {
      self.onResolvedCallback.push(function (value) {
        try {
          const x = onResolved(value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (err) {
          reject(err);
        }
      })
      self.onRejectedCallback.push(function (reason) {
        try {
          const x = onRejected(reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (err) {
          reject(err);
        }
      })
    })
  }
  return promise2;
}

MyPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
}

MyPromise.deferred = function () {
  var dfd = {}
  dfd.promise = new Promise(function(resolve, reject) {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}
