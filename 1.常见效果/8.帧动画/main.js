window.onload = function () {
  const imgUrl = 'images/rabbit-big.png';
  const positions = ['0 -854px', '-174px -852px', '-349px -852px', '-524px -852px', '-698px -852px', '-873px -848px'];
  const ani = document.getElementById('animation');
  
  animation(ani, positions, imgUrl);

  function animation (ele, positions, imgUrl) {
    let index = 0;
    ele.style.backgroundImage = `url(${imgUrl})`;
    ele.style.backgroundRepeat = 'no-repeat';

    setInterval(() => {
      ele.style.backgroundPosition = positions[index];
      if (++index == positions.length) {
        index = 0;
      }      
    }, 80);
  }
}