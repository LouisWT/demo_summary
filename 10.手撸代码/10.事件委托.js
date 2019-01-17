<ol id='vid'>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
</ol>

// 将 li 的事件委托到 ol元素
var $ = function () {
  return document.getElementById('id');
}

$('vid').onclick = function (e) {
  var src;
  // 1. IE 的事件可能是在 window 对象上
  e = e || fixEvent(window.event);

  src = e.target || e.srcElement;
  
  if (src.nodeName === 'A') return;

  // 3. 取消默认行为
  e.preventDefault();

  // 4. 取消冒泡
  e.stopPropagation();

  // 处理事件 
}

// 针对IE的 event，polyfill 通用的方法
function fixEvent(event) {
  // 取消默认行为
  event.preventDefault = function () {
    this.returnValue = false;
  }

  // 阻止冒泡
  event.stopPropagation = function () {
    this.cancelBubble = true;
  }
}