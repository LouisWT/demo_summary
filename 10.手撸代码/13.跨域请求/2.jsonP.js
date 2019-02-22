function handleResponse(response) {
  console.log(response);
}

let script = document.createElement('script');

script.src = 'http://www.example.com/?callback=handleResponse';

// 请求在 script 标签插入到文档后开始
document.body.appendChild(script);