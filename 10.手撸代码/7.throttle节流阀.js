/**
 * 
 * @param {funcion} fn 需要节流的函数
 * @param {number} threshhold 调用间隔
 * 
 * @return {fucntion} 节流之后的函数
 */
function throttle(fn, threshhold) {
  let timer;
  // 上次调用的时间戳
  let last;
  // 默认为 250ms
  threshhold = threshhold || 250;

  return function() {
    let context = this;
    let args = arguments;
    let now = Date.now();
    // 如果是第一次，或者已经到达执行间隔，那么 remaining 会小于等于 0
    const remaining = last ? last + threshhold - now : 0
   
    // 还未到执行间隔
    if (remaining > 0) {
      clearTimeout(timer);

      timer = setTimeout(function () {
        last = Date.now();
        fn.apply(context, args);
      }, remaining);
    }
    // 在第一次和到达时间间隔时执行一次 fn
    else {
      last = now;
      fn.apply(context, args);
    }
  }
}

// 使用方法
let fn = function() {
  console.log('scroll');
}

let thFn = throttle(fn, 100);

window.addEventListener('scroll', thFn);