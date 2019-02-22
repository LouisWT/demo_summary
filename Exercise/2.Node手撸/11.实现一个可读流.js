let { Readable } = require('stream');

class MyReadable extends Readable {
  constructor(dataSource, options) {
    super(options);
    this.dataSource = dataSource;
  }
  _read() {
    let data = this.dataSource.makeData();
    console.log(this.push(data));
  }
}

const dataSource = {
  data: new Array('abcdefghijklmnopqrstuvwxyz'),
  makeData: function(){
    if(!this.data.length) return null
    return this.data.pop()
  }
}

let stream = new MyReadable(dataSource)
stream.setEncoding('utf8');
stream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  stream.pause()
  console.log('pausing for 1 second')
  setTimeout(()=>{
      console.log('now restart')
      stream.resume()
  }, 1000)
});
