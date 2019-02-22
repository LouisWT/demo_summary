// 编写一个 HTTP 服务器，每当接收到一个路径为 '/api/parsetime' 的 GET 请求的时候，
// 响应一些 JSON 数据。我们期望请求会包含一个查询参数（query string），key 是 "iso"，值是 ISO 格式的时间。
// 响应格式
// {
//   "hour": 14,
//   "minute": 23,
//   "second": 15
// }
let http = require('http');
let url = require('url');

let server = http.createServer((req, res) => {
  let reqUrl = req.url;
  let obj = url.parse(reqUrl, true);
  let { pathname, query } = obj;
  if (pathname === '/api/parsetime') {
    let date = new Date(query.iso);
    let body = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
      unix: +date
    }
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(body));
    res.end();
  }
})

let port = parseInt(process.argv[2]);

server.listen(port)