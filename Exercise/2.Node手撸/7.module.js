let fs = require('fs')
let path = require('path')

function filterFile(dir, ext, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) {
      return callback(err);
    }
    let res = [];
    list.forEach((filename) => {
      if (path.extname(filename) === '.' + ext) {
        res.push(filename);
      }
    })
    callback(null, res);
  })
}

module.exports = filterFile;

filterFile('D:\\WorkSpace\\GitRepo\\Interview\\Exercise\\2.Node手撸', 'js', function (err, list) {
  if (err) {
    return console.error(err);
  }
  console.log(list);
})