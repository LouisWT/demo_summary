window.onload = function() {
    document.documentElement.scrollTop = 0
    const height = document.documentElement.clientHeight;
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.height = `${height}px`;
    }
    const carousel = document.getElementsByClassName('carousel')[0];
    const btns = document.getElementsByClassName('carousel-btns')[0].children[0].children;
    let pressBtn;
    let pressIndex = -1;
    for (let i = 0; i < btns.length; i++) {
        if (i == 0) pressBtn = btns[0];
        btns[i].onclick = function () {
            // 定义 CSS 动画过渡效果
            const height = document.documentElement.clientHeight;
            carousel.style.transition = 'transform 0.8s ease 0s, -webkit-transform 0.8s ease 0s, -moz-transform 0.8s ease 0s';
            carousel.style.transform = `translateY(-${i * height}px)`;
            pressBtn.classList.remove('active');
            pressBtn = btns[i];
            pressIndex = i - 1;
            pressBtn.classList.add('active');
        }
    }
    let timer;
    carousel.addEventListener('mousewheel', (event) => {
        let down;
        if (event.wheelDelta < 0 && pressIndex <= 3) {
            down = true;   
        } else if (event.wheelDelta > 0 && pressIndex >= 0){
            down = false;
        }
        if (down === true || down === false) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                onMouseWheel(down);
            }, 300);
        }
        function onMouseWheel(down) {
            const height = document.documentElement.clientHeight;
            if (down) {
                pressIndex += 1;
            } else {
                pressIndex -= 1;
            }
            pressBtn.classList.remove('active');
            pressBtn = btns[pressIndex + 1];
            pressBtn.classList.add('active');
            carousel.style.transition = 'transform 0.8s ease 0s, -webkit-transform 0.8s ease 0s, -moz-transform 0.8s ease 0s';
            carousel.style.transform = `translateY(-${(pressIndex + 1) * height}px)`;
        }
    });
}

window.onresize = function () {
    const height = document.documentElement.clientHeight;
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.height = `${height}px`;
    }
    document.documentElement.scrollTop = 0
}