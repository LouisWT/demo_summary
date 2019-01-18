// readyState 属性
// 0 代理创建了，但是还没有调用 open
// 1 open 已经被调用
// 2 send 方法已经被调用，并且头部和状态已经可以获得
// 3 loading 下载中
// 4 下载完成 

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
      console.log(xhr.response);
    }
  }
}
xhr.onerror = function (err) {
  console.log(err);
}
xhr.open(method, url, true);
xhr.send(data);
