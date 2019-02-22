// 执行一个异步的对文件系统的操作：读取一个文件，
// 并且在终端（标准输出 stdout）打印出这个文件中的内容的行数
let fs = require('fs')
let path = process.argv[2];

fs.readFile(path, (err, data) => {
  if (err) {
    return console.error(err);
  }
  let lines = data.toString().split('\n');
  console.log(lines.length)
})
