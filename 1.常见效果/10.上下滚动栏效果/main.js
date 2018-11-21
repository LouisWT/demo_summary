// 当前显示哪个轮播页
let pressBtn;
let pressIndex = -1;

function onMouseWheel(down) {
    const height = document.documentElement.clientHeight;
    const prevCon = document.getElementsByClassName(`page${pressIndex}`)[0].getElementsByClassName('standard-content')[0];
    prevCon.classList.add('out');
    if (down) {
        pressIndex += 1;
    } else {
        pressIndex -= 1;
    }
    // 当前的轮播页加上动画
    const curCon = document.getElementsByClassName(`page${pressIndex}`)[0].getElementsByClassName('standard-content')[0];
    curCon.classList.remove('out');
    pressBtn.classList.remove('active');
    const btns = document.getElementsByClassName('carousel-btns')[0].children[0].children;
    pressBtn = btns[pressIndex + 1];
    pressBtn.classList.add('active');
    const carousel = document.getElementsByClassName('carousel')[0];
    carousel.style.transition = 'transform 0.8s ease 0s, -webkit-transform 0.8s ease 0s, -moz-transform 0.8s ease 0s';
    carousel.style.transform = `translateY(-${(pressIndex + 1) * height}px)`;
    const header = document.getElementsByClassName('header')[0];
    if (pressIndex == -1 || pressIndex == 4) {
        header.classList.remove('showheader');
    } else {
        header.classList.add('showheader');
    }
}

window.onload = function () {
    // 根据视口大小设置轮播页的高度
    const height = document.documentElement.clientHeight;
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.height = `${height}px`;
    }
    // 初始化显示第一个轮播页
    const carousel = document.getElementsByClassName('carousel')[0];
    carousel.style.transform = `translateY(0px)`;
    // 可以点击的轮播点
    const btns = document.getElementsByClassName('carousel-btns')[0].children[0].children;
    for (let i = 0; i < btns.length; i++) {
        if (i == 0) pressBtn = btns[0];
        btns[i].onclick = function () {
            // 定义 CSS 动画过渡效果
            // 点击后滚到相应的轮播页
            const height = document.documentElement.clientHeight;
            carousel.style.transition = 'transform 0.8s ease 0s, -webkit-transform 0.8s ease 0s, -moz-transform 0.8s ease 0s';
            carousel.style.transform = `translateY(-${i * height}px)`;
            // 相应的轮播点亮起来
            pressBtn.classList.remove('active');
            // 之前的轮播页状态重置
            const prevCon = document.getElementsByClassName(`page${pressIndex}`)[0].getElementsByClassName('standard-content')[0];
            prevCon.classList.add('out');
            // 更新当前的轮播页和轮播索引
            pressBtn = btns[i];
            pressIndex = i - 1;
            // 当前的轮播页加上动画
            const curCon = document.getElementsByClassName(`page${pressIndex}`)[0].getElementsByClassName('standard-content')[0];
            curCon.classList.remove('out');
            pressBtn.classList.add('active');
            // 出了第一个轮播页，都显示 header
            const header = document.getElementsByClassName('header')[0];
            if (pressIndex == -1 || pressIndex == 4) {
                header.classList.remove('showheader');
            } else {
                header.classList.add('showheader');
            }
        }
    }
    let prevTime = Date.now();
    let curTime;
    carousel.addEventListener('mousewheel', (event) => {
        curTime = Date.now();
        if (curTime - prevTime < 1500) {
            return;
        }
        prevTime = curTime;
        let down;
        if (event.wheelDelta < 0 && pressIndex <= 3) {
            down = true;
        } else if (event.wheelDelta > 0 && pressIndex >= 0) {
            down = false;
        }
        if (down === true || down === false) {
            onMouseWheel(down);
        }
    });

    const arrows = document.getElementsByClassName('arrow');
    for (let i = 0; i < arrows.length; i++) {
        arrows[i].addEventListener('click', function () {
            onMouseWheel(true);
        })
    }
}

window.onresize = function () {
    const height = document.documentElement.clientHeight;
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.height = `${height}px`;
    }
    const carousel = document.getElementsByClassName('carousel')[0];
    carousel.style.transform = `translateY(0px)`;
    const btns = document.getElementsByClassName('carousel-btns')[0].children[0].children;
    pressBtn.classList.remove('active');
    btns[0].classList.add('active');
    pressBtn = btns[0];
    const prevCon = document.getElementsByClassName(`page${pressIndex}`)[0].getElementsByClassName('standard-content')[0];
    prevCon.classList.add('out');
    pressIndex = -1;
    // 当前的轮播页加上动画
    const curCon = document.getElementsByClassName(`page${pressIndex}`)[0].getElementsByClassName('standard-content')[0];
    curCon.classList.remove('out');
    const header = document.getElementsByClassName('header')[0];
    header.classList.remove('showheader');
}