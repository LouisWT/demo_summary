let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  // 3. readyState 属性
  // 0 代理创建了，但是还没有调用 open
  // 1 open 已经被调用
  // 2 send 方法已经被调用，并且头部和状态已经可以获得
  // 3 loading 下载中
  // 4 下载完成 
  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
      console.log(xhr.response);
    }
     
  }
}

xhr.onerror = function (err) {
  console.log(err);
}
// 1. method 是请求的方法，url 是请求的路由，true 表示是异步请求而不是同步请求
xhr.open(method, url, true);
// 2. 发送请求，如果是 get 请求，要发送 null，post 请求要发送传输的数据
xhr.send(data);
