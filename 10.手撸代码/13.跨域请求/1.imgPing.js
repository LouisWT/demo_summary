let img = new Image();

img.onload = function () {
  alert('done')
}

img.onerror = function () {
  alert('err')
}

// 从设置 src 属性开始请求
img.src = "http://www.example.com/1.jpg";