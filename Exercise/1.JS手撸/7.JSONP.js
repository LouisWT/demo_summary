// 客户端
// fn 的第一个参数是 err，之后是数据
function jsonp(url, opts, fn){
  // 调用的函数名
  let id = opts.name || ('jsonp' + Date.now());
  // 给后台的 query参数名
  let param = opts.param || 'callback';
  // 过期时间
  let timeout = opts.timeout || 60000;
  let timer;

  window[id] = function(data){
    cleanup();
    if (fn) fn(null, data);
  };

  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    window[id] = () => {};
    if (timer) clearTimeout(timer);
    document.head.removeChild(script);
  }

  // 加上参数名
  url += url.indexOf('?') === -1 ? '?' : '&';
  url += `${param}=${encodeURIComponent(id)}`
  // 创建 script
  let script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);

  // 返回取消函数
  return cleanup;
}

// 服务器端
let http = require('http');
let url = require('url');
let server = http.createServer((req, res) => {
  let { query } = url.parse(req.url, true);
  let data = { data: 1 };
  res.setHeader('Content-Type', 'text/javascript')
  res.write(`${query.callback}(${JSON.stringify(data)})`);
  res.end();
})
server.listen(3000);