let fs = require('fs');
function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}

let filename = process.argv[2];

function* main() {
  let file = yield readFile(filename);
  console.log(file.toString())
}

// 自动执行器，类似 co 库
function run(gen) {
  let g = gen();
  function next(data) {
    let res = g.next(data);
    if (res.done) return res.value
    // res 是一个 Promise
    res.value.then((data) => {
      next(data);
    })
  }
  next();
}

run(main)