/**
 * 
 * @param {funcion} fn 需要防抖化的函数
 * @param {number} delay 等待调用的时间
 * 
 * @return {fucntion} 防抖化之后的函数
 */
function debounce(fn, delay) {
  // 使用闭包保存这个函数的定时器
  let timer = null;

  return function(...args) {
    // 保存调用上下文
    let context = this;

    // 将之前的 timer 清除
    clearTimeout(timer);

    // 设置新的 timer，这样在最后一次调用时，timer 不会被取消，这样就会在 delay 后执行 fn
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}

// 使用方法
let fn = function() {
  console.log('resize');
}

let deFn = debounce(fn, 100);

window.addEventListener('resize', deFn);