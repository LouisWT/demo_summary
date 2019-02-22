// 编写一个程序来发起一个 HTTP GET 请求，所请求的 URL 为命令行参数的第一个。
// 然后将每一个 "data" 事件所得的数据，以字符串形式在终端（标准输出 stdout）的新的一行打印出来
let http = require('http')

let url = process.argv[2]

http
.get(url, (response) => {
  response.setEncoding('utf8')
  let chunk = '';
  response.on('data', (data) => {
    chunk += data;
  })
  response.on('end', () => {
    console.log(chunk.length)
    console.log(chunk)
  })
  response.on('error', console.error)
})
.on('error', console.error)
