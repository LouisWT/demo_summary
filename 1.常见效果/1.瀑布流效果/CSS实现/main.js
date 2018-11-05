const dataUrl = {
  data: [
    {
      src: 'http://qingmooc-v1.oss-cn-qingdao.aliyuncs.com/other/CMD.png'
    },
    {
      src: 'http://qingmooc-v1.oss-cn-qingdao.aliyuncs.com/other/CSSBOx.png'
    },
    {
      src: 'http://qingmooc-v1.oss-cn-qingdao.aliyuncs.com/other/IP6.png'
    },
    {
      src: 'http://qingmooc-v1.oss-cn-qingdao.aliyuncs.com/other/Keepalived.png'
    }
  ]
};

window.onload = function() {
  window.onscroll = handleOnScroll;
}

// 是否有滚动加载数据块的条件
function checkScrollSlide() {
  const parent = document.getElementById('main');
  const boxes = parent.getElementsByClassName('box');
  const lastBox = boxes[boxes.length - 1];
  const lastBoxHeight = lastBox.offsetTop + Math.floor(lastBox.offsetHeight / 2);

  // chrome 中 document.body.scrollTop 一直为 0
  // document.documentElement === document.getElementsByTagname('html')[0]
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop; 
  const height = document.body.clientHeight || document.documentElement.clientHeight

  if (lastBoxHeight < scrollTop + height) {
    return true;
  }
  return false;
}

function handleOnScroll() {
  if (checkScrollSlide()) {
    const parent = document.getElementById('main');

    for (let index = 0; index < dataUrl.data.length; index += 1) {
      const newDiv = document.createElement('div');
      const secondDiv = document.createElement('div');
      const newImg = document.createElement('img');
      newDiv.appendChild(secondDiv);
      secondDiv.appendChild(newImg);
      newDiv.setAttribute('class', 'box');
      secondDiv.setAttribute('class', 'pic');
      newImg.setAttribute('src', dataUrl.data[index].src);
      parent.appendChild(newDiv);
    }
  }
}