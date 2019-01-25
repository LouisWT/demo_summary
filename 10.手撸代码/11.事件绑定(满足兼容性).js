// 1. 简单的
let EventUtil = {
  addHandler: function (elm, evType, fn) {
    if (elm.addEventListener) {
      // 默认在冒泡阶段处理
      elm.addEventListener(evType, fn, false);//DOM2.0
    }
    else if (elm.attachEvent) {
      elm.attachEvent('on' + evType, fn);//IE5+
    }
    else {
      elm['on' + evType] = fn;//DOM 0
    }
  },
  removeHandler: function(elm, type, fn) {
    if (elm.removeEventListener) {
      elm.removeEventListener(type, fn, false);
    }
    else if (elm.detachEvent) {
      elm.detachEvent('on' + type, fn);
    }
    else {
      elm['on' + type] = null;
    }
  },
  getEvent: function(event) {
    return event ? event : window.event;
  },
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      this.cancelBubble = true;
    }
  }
}


// 2.进阶
function addEvent(element, type, handler) {
  if (!element.events) element.events = {};

  //获得事件处理程序队列
  let handlers = element.events[type];

  // 如果没有，创建一个事件处理程序的队列
  if (!handlers) {
    handlers = [];
    element.events[type] = handlers;

    //存储存在的事件处理函数(如果有)，之后会对这个方法进行覆盖
    if (element["on" + type]) {
      handlers.push(element["on" + type]);
    }
  }

  //将事件处理函数存入队列
  handlers.push(handler);

  // 替换兼容性最好的 DOM0 绑定方法 
  element["on" + type] = handleEvent;
};

// 当发生事件时，事件处理函数就是下面这个函数
// 如果是正常浏览器，this 是拥有这个事件处理函数的元素
// 如果是 IE，this 是 window 对象
function handleEvent(event) {
  // 抓取事件对象，IE使用全局事件对象
  event = event || fixEvent(window.event);
  // 取得事件处理程序队列
  const handlers = this.events[event.type];

  let returnValue = true;
  // 执行每个处理函数
  for (let handler of handlers) {
    if (handler.call(this, event) === false) {
      returnValue = false;
    }
  }
  return returnValue;
}

function fixEvent(event) {
  // 对IE polyfill 标准方法
  event.preventDefault = function () {
    this.returnValue = false;
  };
  event.stopPropagation = function () {
    this.cancelBubble = true;
  };
  return event;
}

function removeEvent(element, type, handler) {
  if (element.events && element.events[type]) {
    const handlers = element.events[type];
    const index = handlers.indexOf(handler);
    if (index === -1) {
      return;
    }
    handlers.splice(index, 1);
    // 递归的移除，防止一个事件处理函数对一个type进行了多次注册的情况
    return removeEvent(element, type, handler)
  }
}