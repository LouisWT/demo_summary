window.onload = function() {
  const items = document.getElementsByClassName('menu-item');
  let activeIndex;

  let timer;
  let mouseInSub = false;

  for(let i = 0; i < items.length; i++) {
    const item = items[i];
    item.addEventListener('mouseenter', function(event) {
      if (!activeIndex) {
        activeIndex = event.srcElement.dataset.id;
        const sub = document.getElementById('sub');
        sub.classList.remove('none');
        const subContent = document.getElementById(activeIndex);
        subContent.classList.remove('none');
        return;
      }
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(function () {
        if (mouseInSub) {
          return;
        }
        const sub = document.getElementById('sub');
        sub.classList.remove('none');
        const prevContent = document.getElementById(activeIndex);
        prevContent.classList.add('none');

        activeIndex = event.srcElement.dataset.id;
        const subContent = document.getElementById(activeIndex);
        subContent.classList.remove('none');
        timer = undefined;
      }, 300);
    });
  }
  const wrapper = document.getElementById('test');
  wrapper.addEventListener('mouseleave', function(event) {
    if (activeIndex) {
      const prevContent = document.getElementById(activeIndex);
      prevContent.classList.add('none');
      const sub = document.getElementById('sub');
      sub.classList.add('none');
    }
  })

  const sub = document.getElementById('sub');
  sub.addEventListener('mouseenter', function() {
    mouseInSub = true;
  });
  sub.addEventListener('mouseleave', function () {
    mouseInSub = false;
  });
}