// 1. 建立连接，传入的 url 必须是绝对 url
let socket = new WebSocket('ws://www.example.com')

// 2. 监听连接事件
socket.onopen = function () {
  // request
  socket.send('request');
}

// 3. 监听服务器返回数据
socket.onmessage = function (event) {
  // 4. 通过 event.data 获取服务器数据
  console.log(event.data);
}