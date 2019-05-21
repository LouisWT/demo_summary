function Promise(fn) {
  let self = this;
  self.status = 'pending';
  self.data = null;
  self.onResolve = [];
  self.onReject = [];

  function resolve(value) {
    if (value instanceof Promise) {
      return value.then(resolve, reject)
    }
    setTimeout(function() {
      if (self.status === 'pending') {
        self.status = 'resolved';
        self.data = value;
        self.onResolve.forEach((callback) => {
          callback.call(self, value);
        })
      }
    })
  }

  function reject(value) {
    setTimeout(function () {
      if (self.status === 'pending') {
        self.status = 'rejected';
        self.data = value;
        self.onReject.forEach((callback) => {
          callback.call(self, value);
        })
      }
    })
  }

  try {
    fn(resolve, reject);
  } catch(err) {
    reject(err);
  }
}

Promise.prototype.then = function (rs, rj) {
  let self = this;
  rs = typeof rs === 'function' ? rs : function(v) { return v }
  rj = typeof rj === 'function' ? rj : function(v) { throw v }
  let promise2 = null;

  if (self.status === 'pending') {
    promise2 = new Promise(function (resolve, reject) {
      self.onResolve.push(function (value) {
        try {
          let x = rs(value);
          if (x instanceof Promise) {
            return x.then(resolve, reject)
          }
          resolve(x);
        } catch(err) {
          reject(err);
        }
      })
      self.onReject.push(function (value) {
        try {
          let x = rj(value);
          if (x instanceof Promise) {
            return x.then(resolve, reject);
          }
          resolve(x)
        } catch(err) {
          reject(err);
        }
      })
    })
  }

  if (self.status === 'resolved') {
    promise2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          let x = rs(self.data);
          if (x instanceof Promise) {
            return x.then(resolve, reject);
          }
          resolve(x);
        } catch(err) {
          reject(err);
        }
      })
    })
  }

  if (self.status === 'rejected') {
    promise2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          let x = rj(self.data);
          if (x instanceof Promise) {
            return x.then(resolve, reject);
          }
          resolve(x);
        } catch(err) {
          reject(err);
        }
      })
    })
  }

  return promise2;
}