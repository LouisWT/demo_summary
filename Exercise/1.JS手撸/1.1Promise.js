function Promise(fn) {
  let self = this;
  self.status = 'pending';
  self.data = null;
  self.onResolve = [];
  self.onReject = [];

  function resolve(data) {
    if (data instanceof Promise) {
      data.then(resolve, reject);
    }
    setTimeout(function () {
      if (self.status === 'pending') {
        self.status = 'resolved';
        self.data = data;
        self.onResolve.forEach((callback) => {
          callback.call(self, data);
        })
      }
    })
  }

  function reject(err) {
    setTimeout(function() {
      if (self.status === 'pending') {
        self.status = 'rejected';
        self.data = err;
        self.onReject.forEach((callback) => {
          callback.call(self, err);
        })
      }
    })
  }

  try{
    fn(resolve, reject)
  } catch(err) {
    reject(err);
  }
}

Promise.prototype.then = function (rs, rj) {
  let self = this;
  rs = typeof rs === 'function' ? rs : function (v) {return v}
  rj = typeof rj === 'function' ? rj : function (e) {throw e}
  let promise2 = null;
  if (self.status === 'pending') {
    promise2 = new Promise((resolve, reject) => {
      self.onResolve.push(function (data) {
        try {
          let res = rs(data);
          if (res instanceof Promise) {
            return res.then(resolve, reject);
          }
          resolve(res);
        } catch(err) {
          reject(err);
        }
      })
      self.onReject.push(function (err) {
        try {
          let res = rj(err);
          if (res instanceof Promise) {
            return res.then(resolve, reject);
          }
          resolve(x);
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