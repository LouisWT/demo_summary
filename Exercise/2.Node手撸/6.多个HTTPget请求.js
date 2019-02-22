// 将有三个 URL 作为前三个命令行参数提供给你。
// 你需要收集每一个 URL 所返回的完整内容，然后将它们按顺序在终端（标准输出 stdout）打印出来。

let http = require('http')

let urls = process.argv.slice(2)

async function GET(url) {
  return new Promise((resolve, reject) => {
    try {
      http.get(url, (res) => {
        let chunk = ''
        res.on('data', (data) => {
          chunk += data.toString();
        })
        res.on('end', () => {
          resolve(chunk);
        })
        res.on('error', (err) => {
          reject(err)
        })
      })
    } catch(err) {
      reject(err)
    }
  })
}

async function main(urls) {
  let req = [];
  for (url of urls) {
    req.push(GET(url));
  }
  let res = await Promise.all(req);
  console.log(res[0]);
  console.log(res[1]);
  return res;
}

main(urls)