function loadImg(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = function () {
      resolve(img);
    }
    img.onerror = function () {
      reject(new Error('could not load img'));
    }
    img.src = url;
  });
}

loadImg('xxx').then(function (img) {
  console.log(img);
}).catch(err => {
  console.log(err);
})