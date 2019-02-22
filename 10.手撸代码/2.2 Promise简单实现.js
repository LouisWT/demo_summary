function Promise(fn) {
  const self = this;
  self.status = 'pending';
  self.data = undefined;
  self.onResolvedCallback = [];
  self.onRejectedCallback = [];

  function resolve(value) {
    if (value instanceof Promise) {
      return value.then(resolve, reject);
    }
    setTimeout(function() {
      if (self.status === 'pending') {
        self.status = 'resolved';
        self.data = value;
        self.onResolvedCallback.forEach((callback) => {
          callback.call(self, value);
        })
      }
    })
  }

  function reject(reason) {
    setTimeout(function() {
      if (self.status === 'pending') {
        self.status = 'rejected';
        self.data = reason;
        self.onRejectedCallback.for((callback) => {
          callback.call(self, reason);
        })
      }
    })
  }

  try {
    fn(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  const self = this;
  let promise2;
  onResolved = typeof onResolved === 'function' ? onResolved : function (v) { return v; };
  onRejected = typeof onRejected === 'function' ? onRejected : function (r) { throw r; }

  if (self.status === 'resolved') {
    promise2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          const x = onResolved(self.data);
          if (x instanceof Promise) {
            return x.then(resolve, reject);
          }
          resolve(x);
        } catch (err) {
          reject(err);
        }
      })
    })
  }

  if (self.status === 'rejected') {
    promise2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          const x = onRejected(self.data);
          if (x instanceof Promise) {
            return x.then(resolve, reject)
          }
        } catch (err) {
          reject(err);
        }
      })
    })
  }

  if (self.status === 'pending') {
    promise2 = new Promise(function (resolve, reject) {
      self.onResolvedCallback.push(function (value) {
        try {
          const x = onResolved(value);
          if (x instanceof Promise) {
            return x.then(resolve, reject)
          }
        } catch (err) {
          reject(err);
        }
      })
      self.onRejectedCallback.push(function (reason) {
        try {
          const x = onRejected(reason);
          if (x instanceof Promise) {
            return x.then(resolve, reject)
          }
        } catch (err) {
          reject(err);
        }
      })
    })
  }
  return promise2;
}

Promise.all = function (arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') return;
  return new Promise(function (resolve, reject) {
    let res = new Array(arr.length);
    let count = 0;
    arr.forEach((promise, index) => {
      function onResolve(value) {
        res[index] = value;
        count++;
        if (count === arr.length) {
          resolve(res);
        }
      }
      function onRejected(err) {
        reject(err);
      }
      promise.then(onResolve, onRejected);
    })
  })
}