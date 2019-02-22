// 编写一个 HTTP 服务器，它只接受 POST 形式的请求，
// 并且将 POST 请求主体（body）所带的字符转换成大写形式，然后返回给客户端。
let http = require('http')

let port = parseInt(process.argv[2])

let server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    res.write('need post method')
    res.end()
    return;
  }
  let chunk = '';
  req.on('data', (data) => {
    chunk += data.toString();
  })
  req.on('end', () => {
    res.write(chunk.toUpperCase())
    res.end();
  })
})

server.listen(port);