// 1. 获取元素在页面的偏移量
function getElementLeft(element) {
  let actualLeft = element.offsetLeft;
  // 定位父元素
  let current = element.offsetParent;
  while (current != null) {
    actualLeft = current.offsetLeft;
    current = current.offsetParent;
  }
  return actualLeft;
}

function getElementTop(element) {
  let actualTop = element.offsetTop;
  // 定位父元素
  let current = element.offsetParent;
  while (current != null) {
    actualTop = current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}

// 2. 获取浏览器视口大小
function getViewport() {
  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }
}

// 3. 获取文档的总高度
let docHeight = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight);

let docWidth = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth);

// 4. 获取文档的滚动距离
let scrollTop = document.documentElement.scrollTop;
let scrollLeft = document.documentElement.scrollLeft;

// 5. 获取元素在视口中的位置
function getBoundingClientRect(element) {
  if (element.getBoundingClientRect) {
    let rect = element.getBoundingClientRect();
    return {
      left: rect.left,
      right: rect.right,
      top: rect.top,
      bottom: rect.bottom
    }
  }
  let actualTop = getElementTop(element)
  let actualLeft = getElementLeft(element)
  let scrollTop = element.scrollTop;
  let scrollLeft = element.scrollLeft;
  let offsetWidth = element.offsetWidth;
  let offsetHeight = element.offsetHeight;
  return {
    left: actualLeft - scrollLeft,
    right: actualLeft - scrollLeft + offsetWidth,
    top: actualTop - scrollTop,
    bottom: actualTop + offsetHeight - scrollTop
  }
}