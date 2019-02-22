function pipe(readable, writable) {
  readable.on('data', (chunk) => {
    let ok = writable.write(chunk);
    if (!ok) readable.pause();
  })
  writable.on('drain', () => {
    readable.resume();
  })
  writable.emit('pipe');
}