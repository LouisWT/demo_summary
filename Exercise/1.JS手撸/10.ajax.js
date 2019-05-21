function ajax(obj) {
  return new Promise((resolve, reject) => {
    if (!obj.url) reject('no url');
    obj.method = obj.method || 'GET';
    obj.body = obj.body || null;
    let xhr = new XMLHttpRequest();
    // 设置/监听超时
    if (obj.timeout) {
      xhr.timeout = obj.timeout;
      xhr.ontimeout = function () {
        reject('timeout');
      }
    }
    // 获取响应
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          resolve(xhr.response);
        } else {
          reject(xhr.status);
        }
      }
    }
    // 监听错误
    xhr.onerror = function (err) {
      reject(err);
    }
    xhr.open(obj.method, obj.url, true);
    // 设置 header，必须 Open 之后才能设置
    if (obj.headers) {
      Object.keys(obj.headers).forEach((k) => {
        xhr.setRequestHeader(k, obj.headers[k]);
      })
    }
    xhr.send(obj.body);
  })
}

