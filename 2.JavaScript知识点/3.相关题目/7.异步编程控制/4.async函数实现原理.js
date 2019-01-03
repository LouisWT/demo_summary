// async 函数是什么？一句话，它就是 Generator 函数的语法糖。
// async 函数的实现原理，就是将 Generator函数 和自动执行器，包装在一个函数里

async function fn(args) {
  // ...
}

// 等同于
function func(args) {
  // spawn 是一个类似于 co 库的生成器函数控制器
  return spawn(function* () {
    // ...
  })
}
