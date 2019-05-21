let input = document.getElementById('file');
let form = new FormData();
form.append('file', input.files[0]);
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr < 300) || xhr === 304) {
      console.log(xhr.response);
    }
  }
}

// 毫秒数
xhr.timeout = 60000;

xhr.ontimeout = function () {
  console.log('timeout');
}

xhr.open();
xhr.send(form);