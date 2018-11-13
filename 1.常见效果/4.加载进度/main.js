document.onreadystatechange = function () {
  // 加载完成后让loading消失
  // if (document.readyState == 'complete') {
  //   const loading = document.getElementsByClassName('loading');
  //   loading[0].style.display = 'none';
  // }

  const content = document.getElementById('logo-loading');
  let degree = 60;
  let timer = setInterval(function () {
    content.style.transform = `rotate(${degree}deg)`;
    degree += 60;
    if (degree == 360) degree = 0;
  }, 1000);
}