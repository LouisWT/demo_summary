// 编写一个程序来打印出指定目录下的文件列表，并且以特定的文件名扩展名来过滤这个列表
let fs = require('fs')
let path = require('path')

let root = process.argv[2];
let ext = process.argv[3];

fs.readdir(path.resolve(root), (err, list) => {
  if (err) return;
  list.forEach((filename) => {
    let extname = path.extname(filename);
    if (extname === '.' + ext) {
      console.log(filename);
    }
  })
})