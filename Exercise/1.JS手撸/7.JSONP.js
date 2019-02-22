// 客户端
function handle(data) {
  console.log(data);
}
let script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://www.example.com/?callback=handle'
document.head.appendChild(script);

// 服务器端
let http = require('http');
let url = require('url');
let server = http.createServer((req, res) => {
  let { query } = url.parse(req.url, true);
  let data = { a: 1 };
  res.setHeader('Content-Type', 'text/javascript')
  res.write(`${query.callback}(${JSON.stringify(data)})`);
  res.end();
})
server.listen(3000);