// 1. 开启一个 SSE 连接
// url 必须是同源的
let source = new EventSource(url);

// 2. 获取服务器数据
source.onmessage = function (event) {
  // 服务器端的数据在 event.data
  console.log(event.data);
}