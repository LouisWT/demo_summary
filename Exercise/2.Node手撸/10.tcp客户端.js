let net = require('net');

let client = net.connect('3000', '127.0.0.1', () => {
  console.log('connected')
})

client.on('data', (data) => {
  console.log(data.toString())
})