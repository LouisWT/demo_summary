// 下面的代码摘自 co 库
function co(gen, ...args) {
  var ctx = this;

  // 返回一个 Promise 对象
  return new Promise(function (resolve, reject) {
    if (typeof gen === 'function') gen = gen.apply(ctx, args);

    // 如果co 库执行的不是 GeneratorFunction，那么直接返回
    if (!gen || typeof gen.next !== 'function') return resolve(gen);

    onFulfilled();

    function onFulfilled(res) {
      var ret;
      try {
        // 执行迭代器，并将上一次得到的结果传入生成器函数
        ret = gen.next(res);
      } catch (e) {
        return reject(e);
      }
      next(ret);
      return null;
    }

    function onRejected(err) {
      var ret;
      try {
        ret = gen.throw(err);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    function next(ret) {
      // ret 是迭代器返回的对象有 value 和 done
      // 如果 done，那么就返回最后的 value
      if (ret.done) return resolve(ret.value);
      // 这里简化一下，只能 yield Promise 对象
      var value = ret.value;
      // 如果 value 有值并且是 Promise，就继续执行，并且将当前的值传入生成器函数
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
        + 'but the following object was passed: "' + String(ret.value) + '"'));
    }
  });
}

function isPromise(obj) {
  return 'function' == typeof obj.then;
}

// 使用方法
co(function* () {
  let a = 1;
  let b = yield Promise.resolve({ a, data: 2 });
  let c = yield Promise.resolve({ ...b, c: 3})
  return c;
}).then((value) => {
  console.log(value);
})