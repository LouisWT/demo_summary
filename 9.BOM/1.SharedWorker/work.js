onconnect = function(e) {
  var port = e.ports[0];

  port.addEventListener('message', function(e) {
    let res = e.data;
    var workerResult = 'Result: ' + res;
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
}