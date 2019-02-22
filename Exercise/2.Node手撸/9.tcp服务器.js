// 服务器应当监听一个端口，以获取一些 TCP 连接，这个端口会经由第一个命令行参数传递给你的程序。
// 针对每一个 TCP 连接，你都必须写入当前的日期和24小时制的时间

let net = require('net')
let port = parseInt(process.argv[2])
port = typeof port === 'number' ? port : 3000;

let server = net.createServer((socket) => {
  let date = new Date();
  let res = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  socket.write(res);
  socket.end();
})

server.listen(port);