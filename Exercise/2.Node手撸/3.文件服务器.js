// 编写一个 HTTP 文件 服务器，它用于将每次所请求的文件返回给客户端。
// 你的服务器需要监听所提供给你的第一个命令行参数所制定的端口。
// 同时，第二个会提供给你的程序的参数则是所需要响应的文本文件的位置。在这一题中，你必须使用 fs.createReadStream() 方法以 stream 的形式作出请求响应。
let http = require('http')
let fs = require('fs')

let port = process.argv[2]
let file = process.argv[3]

let server = http.createServer((req, res) => {
  let stream = fs.createReadStream(file, {
    encoding: 'utf8'
  })
  res.setHeader('Content-Type', 'text/plain;charset=utf-8')
  stream.pipe(res)
})

server.listen(parseInt(port))