// 基于requestAnimationFrame 实现的动画递增
function animate(startValue, endValue, duration, onChange) {
  let start = Date.now();
  let finish = start + duration;
  function tick() {
    let time = Date.now();
    let curr = time > finish ? duration : time - start;
    let perc = curr / duration;
    // 线性的时间进度函数
    let value = startValue +  (endValue - startValue) * perc;
    // let value = easing(curr, duration, startValue, endValue - startValue)
    onChange(value, perc);
    if (time > finish) return;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function easing(curr, duration, start, length) {
  return -length * Math.cos(curr / duration * (Math.PI / 2)) + start + length;
}